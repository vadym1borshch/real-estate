import { useEffect, useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FormikProvider, useFormik, FormikErrors } from 'formik'
import { v4 } from 'uuid'
import * as Yup from 'yup'
import Input from '../../../../../../components/atoms/input'
import { ActionsButtonsWrapper, MainFormWrapper } from '../Wrappers.tsx'
import { useWindowDimensions } from '../../../../../../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../../../../../../@constants'
import { useAxiosHook } from '../../../../../../helpers/hooks/useAxios.ts'
import { Loader } from '../../../../../../components/atoms/loader'
import { ESTATES } from '../../../../../../@constants/urls.ts'
import { useAppSelector } from '../../../../../../store'
import { selectCurrentEstate } from '../../../../../../store/estateSlice/selectors.ts'
import { useErrorHandler } from '../../../../../../helpers/hooks/useErrorHandler.ts'
import { RealEstate } from '../../../../../../store/estateSlice'

interface FeeField {
  id: string
  key: string
  title: string
  value: string
  descriptions: string
}

interface FeeFieldErrors {
  title?: string
  value?: string
  descriptions?: string
}

const useFeesValidationSchema = () => {
  const { t } = useTranslation()

  return useMemo(() => {
    return Yup.object().shape({
      fees: Yup.array().of(
        Yup.object().shape({
          title: Yup.string().required(
            t('validation.required_value', {
              value: t('details.fees-form.labels.fee'),
            })
          ),
          value: Yup.string().required(
            t('validation.required_value', {
              value: t('details.fees-form.labels.percent'),
            })
          ),
          descriptions: Yup.string(),
          key: Yup.string(),
          id: Yup.string(),
        })
      ),
    })
  }, [t])
}

export const Fees = () => {
  const [fields, setFields] = useState<FeeField[]>([])
  const { t } = useTranslation()
  const currentEstate = useAppSelector(selectCurrentEstate)
  const validationSchema = useFeesValidationSchema()
  const { width } = useWindowDimensions()
  const isLarge = width >= BREAKPOINTS.LG
  const handleError = useErrorHandler()

  const { execute: getFields, loading } = useAxiosHook<FeeField[]>(
    { url: '/fees-fields', method: 'GET' },
    { manual: true }
  )
  const { execute: updateEstate } = useAxiosHook<{ estate: RealEstate }>(
    { url: ESTATES.UPDATE_INFO, method: 'PATCH' },
    { manual: true }
  )

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const res = await getFields()
        if (res.data) {
          setFields(res.data)
        }
      } catch (error) {
        handleError(error)
      }
    }
    fetchFields()
  }, [])

  const formik = useFormik<{ fees: FeeField[] }>({
    initialValues: {
      fees: fields,
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values) => {
      if (currentEstate?.id) {
        const res = await updateEstate({
          data: {
            id: +currentEstate?.id,
            fees: values.fees.map((fee) => {
              return {
                title: fee.title,
                key: fee.key,
                value: fee.value,
                descriptions: fee.descriptions.trim(),
              }
            }),
          },
        })
        formik.resetForm()
        console.log(res.data.estate)
      }
    },
  })

  if (loading) {
    return <Loader />
  }

  return (
    <FormikProvider value={formik}>
      <MainFormWrapper
        name="fees"
        onSubmit={formik.handleSubmit}
        formClassName="lg:grid-cols-[2fr_1.25fr_2fr_1fr]"
        formHeaderValues={{
          firstColumnLabel: t('details.fees-form.labels.fee'),
          secondColumnLabel: t('details.fees-form.labels.percent'),
          thirdColumnLabel: t('details.fees-form.labels.extra-information'),
        }}
        handleNext={() => {}}
        handleSave={() => {}}
      >
        {({ push, remove }) => (
          <>
            {formik.values.fees.map((fee, index) => (
              <div
                className="grid grid-cols-1 gap-3 lg:grid-cols-[2fr_1.25fr_2fr_1fr]"
                key={fee.id}
              >
                <Input
                  name={`fees.${index}.title`}
                  placeholder={t('details.fees-form.placeholders.name')}
                  onChange={formik.handleChange}
                  value={t(fee.title)}
                  disabled={fee.key !== 'user-field'}
                  label={
                    !isLarge ? t('details.fees-form.labels.fee') : undefined
                  }
                  error={
                    formik.touched.fees?.[index]?.title &&
                    formik.errors.fees &&
                    (formik.errors.fees[index] as FormikErrors<FeeField>)?.title
                      ? (formik.errors.fees[index] as FormikErrors<FeeField>)
                          .title
                      : undefined
                  }
                />

                <Input
                  name={`fees.${index}.value`}
                  onChange={formik.handleChange}
                  value={t(fee.value)}
                  label={
                    !isLarge ? t('details.fees-form.labels.percent') : undefined
                  }
                  error={
                    formik.touched.fees?.[index]?.value &&
                    formik.errors.fees &&
                    (formik.errors.fees[index] as FormikErrors<FeeField>)?.value
                      ? (formik.errors.fees[index] as FormikErrors<FeeField>)
                          .value
                      : undefined
                  }
                />

                <Input
                  name={`fees.${index}.descriptions`}
                  onChange={formik.handleChange}
                  value={fee.descriptions}
                  label={
                    !isLarge
                      ? t('details.fees-form.labels.extra-information')
                      : undefined
                  }
                />

                <ActionsButtonsWrapper
                  deleteHandler={() => {
                    if (formik.values.fees.length === 1) {
                      return
                    }

                    remove(index)
                  }}
                  addHandler={() =>
                    push({
                      ...fee,
                      id: v4(),
                      title: '',
                      value: '',
                      description: '',
                    })
                  }
                />
              </div>
            ))}
            {isLarge && formik.submitCount > 0 && formik.errors.fees && (
              <div className="col-span-full mt-4">
                {formik.values.fees.map((fee, index) => {
                  const field = index + 1
                  const errors = formik.errors.fees?.[index] as
                    | FeeFieldErrors
                    | undefined
                  if (!errors) return null

                  return (
                    <div
                      key={fee.id}
                      className="text-red flex flex-col text-sm"
                    >
                      {errors.title && (
                        <div>
                          {field} - {errors.title}
                        </div>
                      )}
                      {errors.value && (
                        <div>
                          {field} - {errors.value}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </>
        )}
      </MainFormWrapper>
    </FormikProvider>
  )
}
