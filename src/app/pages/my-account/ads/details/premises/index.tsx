import { useEffect, useState, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FormikProvider, useFormik, FormikErrors } from 'formik'
import * as Yup from 'yup'
import { v4 } from 'uuid'
import { ActionsButtonsWrapper, MainFormWrapper } from '../Wrappers.tsx'
import Input from '../../../../../../components/atoms/input'
import { useWindowDimensions } from '../../../../../../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../../../../../../@constants'
import { useAxiosHook } from '../../../../../../helpers/hooks/useAxios.ts'
import {
  changeCurrentEstate,
  RealEstate,
} from '../../../../../../store/estateSlice'
import { ESTATES } from '../../../../../../@constants/urls.ts'
import { useAppDispatch, useAppSelector } from '../../../../../../store'
import { selectCurrentEstate } from '../../../../../../store/estateSlice/selectors.ts'

import { useErrorHandler } from '../../../../../../helpers/hooks/useErrorHandler.ts'
import { addToast } from '../../../../../../store/toastSlise'
import { Loader } from '../../../../../../components/atoms/loader'

export type PremisesField = {
  id: string
  key: string
  label: string
  name: string
  value: string
}

interface PremisesFieldErrors {
  name?: string
  value?: string
}

type FormValues = {
  premises: PremisesField[]
}

const usePremisesValidationSchema = () => {
  const { t } = useTranslation()

  return useMemo(() => {
    return Yup.object().shape({
      premises: Yup.array().of(
        Yup.object().shape({
          name: Yup.string(),
          value: Yup.string().required(
            t('validation.required_value', {
              value: t('details.premises-form.labels.square'),
            })
          ),
          key: Yup.string(),
          id: Yup.string(),
          label: Yup.string(),
        })
      ),
    })
  }, [t])
}

export const Premises = () => {
  const [fields, setFields] = useState<PremisesField[]>([])
  const currentEstate = useAppSelector(selectCurrentEstate)
  const validationSchema = usePremisesValidationSchema()
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  const { width } = useWindowDimensions()
  const isLarge = width >= BREAKPOINTS.LG
  const handleError = useErrorHandler()

  const { execute: update } = useAxiosHook<{ estate: RealEstate }>(
    { url: ESTATES.UPDATE_INFO, method: 'PATCH' },
    { manual: true }
  )
  const { execute: getFields, loading } = useAxiosHook<PremisesField[]>(
    { url: '/premises-fields', method: 'GET' },
    { manual: true }
  )

  useEffect(() => {
    const fetchFields = async () => {
      try {
        const res = await getFields({
          params: {
            estateId: currentEstate?.id,
          },
        })
        if (res.data) {
          setFields(res.data)
          console.log(res.data)
        }
      } catch (error) {
        handleError(error)
      }
    }
    fetchFields()
  }, [])

  const formik = useFormik<FormValues>({
    initialValues: {
      premises: fields,
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async (values) => {
      if (currentEstate?.id) {
        try {
          const res = await update({
            data: {
              id: +currentEstate?.id,
              premises: values.premises.map((premise) => {
                return {
                  id: premise.id,
                  value: premise.value,
                  key: premise.key,
                  label: premise.label,
                  name: premise.name,
                }
              }),
            },
          })
          dispatch(changeCurrentEstate(res.data.estate))
          dispatch(
            addToast({
              message: t('common.toast-messages.data-saved'),
              type: 'success',
            })
          )
        } catch (error) {
          handleError(error)
        }
      }
    },
  })

  if (loading) return <Loader />

  return (
    <FormikProvider value={formik}>
      <MainFormWrapper
        name="premises"
        onSubmit={formik.handleSubmit}
        formClassName="lg:grid-cols-[2fr_2fr_1.25fr_1fr]"
        formHeaderValues={{
          firstColumnLabel: t('details.premises-form.labels.type'),
          secondColumnLabel: t('details.premises-form.labels.name'),
          thirdColumnLabel: t('details.premises-form.labels.square'),
        }}
        handleNext={() => {}}
        handleSave={() => {}}
      >
        {({ push, remove }) => (
          <>
            {formik.values.premises.map((premise, index) => (
              <div
                className="grid grid-cols-1 gap-3 lg:grid-cols-[2fr_2fr_1.25fr_1fr]"
                key={premise.id}
              >
                <div className="flex flex-col">
                  <label className="pb-1.5 lg:hidden">
                    {t('details.premises-form.labels.type')}
                  </label>
                  <span className="border-blue-gray flex h-full min-h-[48px] w-full items-center rounded-sm border pl-6">
                    {t(premise.label)}
                  </span>
                </div>
                <Input
                  name={`premises.${index}.name`}
                  placeholder="Text eingeben erforderlich"
                  onChange={formik.handleChange}
                  value={formik.values.premises[index].name}
                  label={
                    !isLarge
                      ? t('details.premises-form.labels.name')
                      : undefined
                  }
                  error={
                    formik.touched.premises?.[index]?.name &&
                    formik.errors.premises &&
                    (
                      formik.errors.premises[
                        index
                      ] as FormikErrors<PremisesField>
                    )?.name
                      ? (
                          formik.errors.premises[
                            index
                          ] as FormikErrors<PremisesField>
                        ).name
                      : undefined
                  }
                />
                <Input
                  name={`premises.${index}.value`}
                  placeholder="1,00"
                  onChange={formik.handleChange}
                  value={formik.values.premises[index].value}
                  label={
                    !isLarge
                      ? t('details.premises-form.labels.square')
                      : undefined
                  }
                  type="number"
                  error={
                    formik.touched.premises?.[index]?.value &&
                    formik.errors.premises &&
                    (
                      formik.errors.premises[
                        index
                      ] as FormikErrors<PremisesField>
                    )?.value
                      ? (
                          formik.errors.premises[
                            index
                          ] as FormikErrors<PremisesField>
                        ).value
                      : undefined
                  }
                />
                <ActionsButtonsWrapper
                  deleteHandler={() => {
                    if (formik.values.premises.length === 1) {
                      return
                    }
                    if (premise.key === 'living-space') {
                      return
                    }

                    remove(index)
                  }}
                  addHandler={() =>
                    push({
                      ...premise,
                      id: v4(),
                      name: '',
                      value: '',
                    })
                  }
                />
              </div>
            ))}
            {isLarge && formik.submitCount > 0 && formik.errors.premises && (
              <div className="col-span-full mt-4">
                {formik.values.premises.map((premise, index) => {
                  const field = index + 1
                  const errors = formik.errors.premises?.[index] as
                    | PremisesFieldErrors
                    | undefined
                  if (!errors) return null

                  return (
                    <div
                      key={premise.id}
                      className="text-red flex flex-col text-sm"
                    >
                      {errors.name && (
                        <div>
                          {field} - {errors.name}
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
