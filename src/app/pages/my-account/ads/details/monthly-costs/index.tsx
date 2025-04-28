import { v4 } from 'uuid'
import { FormikProvider, useFormik } from 'formik'
import { useWindowDimensions } from '../../../../../../helpers/hooks/useWindowDimensions.ts'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useElementSizes } from '../../../../../../helpers/hooks/useElementsSizes.ts'
import { ActionsButtonsWrapper, MainFormWrapper } from '../Wrappers.tsx'
import Input from '../../../../../../components/atoms/input'
import { BREAKPOINTS } from '../../../../../../@constants'

export const MonthlyCosts = () => {
  const formik = useFormik({
    initialValues: {
      monthlyCosts: [
        {
          id: v4(),
          name: '',
          key: 'user-field',
          cost: '',
          ust: '',
        },
      ],
    },
    onSubmit: () => {},
  })

  const { width } = useWindowDimensions()
  const isLarge = width >= BREAKPOINTS.LG

  const costTypeRef = useRef<HTMLDivElement>(null)
  const costRef = useRef<HTMLDivElement>(null)
  const ustRef = useRef<HTMLDivElement>(null)

  const { t } = useTranslation()

  const { containerDimension: costTypeContainerWidth } = useElementSizes({
    containerRef: costTypeRef,
    containerDimensionProp: 'width',
  })
  const { containerDimension: costContainerWidth } = useElementSizes({
    containerRef: costRef,
    containerDimensionProp: 'width',
  })
  const { containerDimension: ustContainerWidth } = useElementSizes({
    containerRef: ustRef,
    containerDimensionProp: 'width',
  })

  return (
    <FormikProvider value={formik}>
      <MainFormWrapper
        name="monthlyCosts"
        onSubmit={formik.handleSubmit}
        formHeaderValues={{
          firstColumnWidth: costTypeContainerWidth,
          secondColumnWidth: costContainerWidth,
          thirdColumnWidth: ustContainerWidth,
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
                <div ref={costTypeRef}>
                  <Input
                    name={`monthlyCosts.${index}.name`}
                    placeholder={t('details.fees-form.placeholders.name')}
                    onChange={formik.handleChange}
                    value={cost.name}
                    label={
                      !isLarge
                        ? t('details.monthly-costs-form.labels.cost-type')
                        : undefined
                    }
                  />
                </div>
                <div ref={costRef}>
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
                </div>
                <div ref={ustRef}>
                  <Input
                    name={`monthlyCosts.${index}.ust`}
                    onChange={formik.handleChange}
                    value={cost.ust}
                    label={
                      !isLarge
                        ? t('details.monthly-costs-form.labels.ust')
                        : undefined
                    }
                  />
                </div>
                <ActionsButtonsWrapper
                  deleteHandler={() => remove(index)}
                  addHandler={() =>
                    push({
                      ...cost,
                      id: v4(),
                      cost: '',
                      ust: '',
                    })
                  }
                />
              </div>
            ))}
          </>
        )}
      </MainFormWrapper>
    </FormikProvider>
  )
}
