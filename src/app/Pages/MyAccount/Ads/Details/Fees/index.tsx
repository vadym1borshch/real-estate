import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { FormikProvider, useFormik } from 'formik'
import { v4 } from 'uuid'
import { useElementSizes } from '../../../../../../helpers/hooks/useElementsSizes.ts'
import Input from '../../../../../../components/atoms/input'
import { initialFields } from './mock.ts'
import { ActionsButtonsWrapper, MainFormWrapper } from '../Wrappers.tsx'
import { useWindowDimensions } from '../../../../../../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../../../../../../helpers/common.ts'

export const Fees = () => {
  const formik = useFormik({
    initialValues: {
      fees: initialFields,
    },
    onSubmit: (values) => {
      console.log('Form Data:', values)
    },
  })

  const nameRef = useRef<HTMLDivElement>(null)
  const percentRef = useRef<HTMLDivElement>(null)
  const additionalInfoRef = useRef<HTMLDivElement>(null)

  const { width } = useWindowDimensions()
  const isLarge = width >= BREAKPOINTS.lg

  const { t } = useTranslation()

  const { containerDimension: nameWidth } = useElementSizes({
    containerRef: nameRef,
    containerDimensionProp: 'width',
  })
  const { containerDimension: percentWidth } = useElementSizes({
    containerRef: percentRef,
    containerDimensionProp: 'width',
  })
  const { containerDimension: additionalInfoWidth } = useElementSizes({
    containerRef: additionalInfoRef,
    containerDimensionProp: 'width',
  })

  return (
    <FormikProvider value={formik}>
      <MainFormWrapper
        name="fees"
        onSubmit={formik.handleSubmit}
        formHeaderValues={{
          firstColumnWidth: nameWidth,
          secondColumnWidth: percentWidth,
          thirdColumnWidth: additionalInfoWidth,
          firstColumnLabel: t('details.fees-form.labels.fee'),
          secondColumnLabel: t('details.fees-form.labels.percent'),
          thirdColumnLabel: t('details.fees-form.labels.extra-information'),
        }}
        handleNext={()=>{}}
        handleSave={()=>{}}
      >
        {({ push, remove }) => (
          <>
            {formik.values.fees.map((fee, index) => (
              <div
                className="grid grid-cols-1 gap-3 lg:grid-cols-[2fr_1.25fr_2fr_1fr]"
                key={fee.id}
              >
                <div ref={nameRef}>
                  <Input
                    name={`fees.${index}.name`}
                    placeholder={t('details.fees-form.placeholders.name')}
                    onChange={formik.handleChange}
                    value={t(fee.name)}
                    disabled={fee.key !== 'user-field'}
                    label={
                      !isLarge ? t('details.fees-form.labels.fee') : undefined
                    }
                  />
                </div>
                <div ref={percentRef}>
                  <Input
                    name={`fees.${index}.percent`}
                    onChange={formik.handleChange}
                    value={t(fee.percent)}
                    label={
                      !isLarge
                        ? t('details.fees-form.labels.percent')
                        : undefined
                    }
                  />
                </div>
                <div ref={additionalInfoRef}>
                  <Input
                    name={`fees.${index}.additional_info`}
                    onChange={formik.handleChange}
                    value={t(fee.additional_info)}
                    label={
                      !isLarge
                        ? t('details.fees-form.labels.extra-information')
                        : undefined
                    }
                  />
                </div>
                <ActionsButtonsWrapper
                  deleteHandler={() => remove(index)}
                  addHandler={() =>
                    push({
                      ...fee,
                      id: v4(),
                      percent: '',
                      additional_info: '',
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
