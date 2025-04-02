import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { FormikProvider, useFormik } from 'formik'
import { v4 } from 'uuid'
import { useElementSizes } from '../../../../../../helpers/hooks/useElementsSizes.ts'
import { ActionsButtonsWrapper, MainFormWrapper } from '../Wrappers.tsx'
import { initialFields } from './mock.ts'
import Input from '../../../../../../components/atoms/input'
import { useWindowDimensions } from '../../../../../../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../../../../../../helpers/common.ts'

export const Premises = () => {
  const formik = useFormik({
    initialValues: {
      premises: initialFields,
    },
    onSubmit: () => {

    },
  })

  const { width } = useWindowDimensions()
  const isLarge = width >= BREAKPOINTS.lg

  const typeRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLDivElement>(null)
  const squareRef = useRef<HTMLDivElement>(null)

  const { t } = useTranslation()

  const { containerDimension: typeContainerWidth } = useElementSizes({
    containerRef: typeRef,
    containerDimensionProp: 'width',
  })
  const { containerDimension: nameContainerWidth } = useElementSizes({
    containerRef: nameRef,
    containerDimensionProp: 'width',
  })
  const { containerDimension: squareContainerWidth } = useElementSizes({
    containerRef: squareRef,
    containerDimensionProp: 'width',
  })

  return (
    <FormikProvider value={formik}>
      <MainFormWrapper
        name="premises"
        onSubmit={formik.handleSubmit}
        formHeaderValues={{
          firstColumnWidth: typeContainerWidth,
          secondColumnWidth: nameContainerWidth,
          thirdColumnWidth: squareContainerWidth,
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
                className="grid grid-cols-1 gap-3 lg:grid-cols-[2fr_2fr_1fr_0.75fr]"
                key={premise.id}
              >
                <div className="flex flex-col" ref={typeRef}>
                  <label className="pb-1.5 lg:hidden">
                    {t('details.premises-form.labels.type')}
                  </label>
                  <span className="border-blue-gray flex h-full min-h-[48px] w-full items-center rounded-sm border pl-6">
                    {t(premise.label)}
                  </span>
                </div>
                <div ref={nameRef}>
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
                  />
                </div>
                <div ref={squareRef}>
                  <Input
                    name={`premises.${index}.square`}
                    placeholder="1,00"
                    onChange={formik.handleChange}
                    value={formik.values.premises[index].square}
                    label={
                      !isLarge
                        ? t('details.premises-form.labels.square')
                        : undefined
                    }
                  />
                </div>
                <ActionsButtonsWrapper
                  deleteHandler={() => remove(index)}
                  addHandler={() =>
                    push({
                      ...premise,
                      id: v4(),
                      name: '',
                      square: '',
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
