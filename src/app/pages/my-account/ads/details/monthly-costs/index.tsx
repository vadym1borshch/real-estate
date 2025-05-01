import { v4 } from 'uuid'
import { FormikProvider, useFormik } from 'formik'
import { useWindowDimensions } from '../../../../../../helpers/hooks/useWindowDimensions.ts'
import { useTranslation } from 'react-i18next'
import { ActionsButtonsWrapper, MainFormWrapper } from '../Wrappers.tsx'
import Input from '../../../../../../components/atoms/input'
import { BREAKPOINTS } from '../../../../../../@constants'
import * as Yup from 'yup'
import { useMemo } from 'react'
import { useAppSelector } from '../../../../../../store/index.ts'
import { selectCurrentEstate } from '../../../../../../store/estateSlice/selectors.ts'
import { ESTATES } from '../../../../../../@constants/urls.ts'
import { useAxiosHook } from '../../../../../../helpers/hooks/useAxios.ts'
import { RealEstate } from '../../../../../../store/estateSlice/index.ts'

interface MonthlyCost {
  id: string
  title: string
  key: string
  cost: string
  descriptions: string
}

interface MonthlyCostErrors {
  title?: string
  cost?: string
  descriptions?: string
}

const INITIAL_VALUES = {
  monthlyCosts: [
    {
      id: v4(),
      title: '',
      key: 'user-field',
      cost: '',
      descriptions: '',
    },
  ],
}

export const MonthlyCosts = () => {
  const { t } = useTranslation()
  const currentEstate = useAppSelector(selectCurrentEstate)

  const { execute: update } = useAxiosHook<{ estate: RealEstate }>(
    { url: ESTATES.UPDATE_INFO, method: 'PATCH' },
    { manual: true }
  )

  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      monthlyCosts: Yup.array().of(
        Yup.object().shape({
          title: Yup.string().required(
            t('validation.required_value', {
              value: t('details.monthly-costs-form.labels.cost-type'),
            })
          ),
          cost: Yup.string().required(
            t('validation.required_value', {
              value: t('details.monthly-costs-form.labels.cost'),
            })
          ),
          descriptions: Yup.string(),
          key: Yup.string(),
          id: Yup.string(),
        })
      ),
    })
  }, [t])

  const formik = useFormik<{ monthlyCosts: MonthlyCost[] }>({
    initialValues: INITIAL_VALUES,
    validationSchema,
    onSubmit: async (values) => {
      if (currentEstate?.id) {
        const res = await update({
          data: {
            id: +currentEstate?.id,
            monthlyCosts: values.monthlyCosts.map((fee) => {
              return {
                title: fee.title,
                key: fee.key,
                cost: fee.cost,
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

  const { width } = useWindowDimensions()
  const isLarge = width >= BREAKPOINTS.LG

  return (
    <FormikProvider value={formik}>
      <MainFormWrapper
        name="monthlyCosts"
        onSubmit={formik.handleSubmit}
        formClassName="lg:grid-cols-[2fr_1.25fr_2fr_1fr]"
        formHeaderValues={{
          firstColumnLabel: t('details.monthly-costs-form.labels.cost-type'),
          secondColumnLabel: t('details.monthly-costs-form.labels.cost'),
          thirdColumnLabel: t('details.monthly-costs-form.labels.ust'),
        }}
        handleNext={() => {}}
        handleSave={() => {}}
      >
        {({ push, remove }) => (
          <>
            {formik.values.monthlyCosts.map((cost, index) => (
              <div
                className="grid grid-cols-1 gap-3 lg:grid-cols-[2fr_1.25fr_2fr_1fr]"
                key={cost.id}
              >
                <Input
                  name={`monthlyCosts.${index}.title`}
                  placeholder={t('details.fees-form.placeholders.name')}
                  onChange={formik.handleChange}
                  value={cost.title}
                  label={
                    !isLarge
                      ? t('details.monthly-costs-form.labels.cost-type')
                      : undefined
                  }
                />

                <Input
                  name={`monthlyCosts.${index}.cost`}
                  onChange={formik.handleChange}
                  value={cost.cost}
                  label={
                    !isLarge
                      ? t('details.monthly-costs-form.labels.cost')
                      : undefined
                  }
                />

                <Input
                  name={`monthlyCosts.${index}.descriptions`}
                  onChange={formik.handleChange}
                  value={cost.descriptions}
                  label={
                    !isLarge
                      ? t('details.monthly-costs-form.labels.ust')
                      : undefined
                  }
                />

                <ActionsButtonsWrapper
                  deleteHandler={() => {
                    if (formik.values.monthlyCosts.length === 1) {
                      return
                    }
                    remove(index)
                  }}
                  addHandler={() =>
                    push({
                      id: v4(),
                      title: '',
                      key: 'user-field',
                      cost: '',
                      descriptions: '',
                    })
                  }
                />
              </div>
            ))}
            {formik.submitCount > 0 && formik.errors.monthlyCosts && (
              <div className="col-span-full mt-4">
                {formik.values.monthlyCosts.map((cost, index) => {
                  const field = index + 1
                  const errors = formik.errors.monthlyCosts?.[index] as
                    | MonthlyCostErrors
                    | undefined
                  if (!errors) return null

                  return (
                    <div
                      key={cost.id}
                      className="text-red flex flex-col text-sm"
                    >
                      {errors.title && (
                        <div>
                          {field} - {errors.title}
                        </div>
                      )}
                      {errors.cost && (
                        <div>
                          {field} - {errors.cost}
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
