import { Field, FieldProps } from 'formik'
import Input from '../../../../../../components/atoms/input'
import Button from '../../../../../../components/atoms/button'
import Icon from '../../../../../../components/atoms/icon'
import { BREAKPOINTS } from '../../../../../../helpers/common.ts'
import { useWindowDimensions } from '../../../../../../helpers/hooks/useWindowDimensions.ts'
import { useTranslation } from 'react-i18next'
import { RefObject } from 'react'

interface Props {
  typeRef: RefObject<HTMLDivElement | null>
  nameRef: RefObject<HTMLDivElement | null>
  squareRef: RefObject<HTMLDivElement | null>
  deleteHandler: () => void
  addHandler: () => void
  field: {
    id: string
    key: string
    label: string
  }
}

export const FieldLayout = ({
  typeRef,
  nameRef,
  squareRef,
  addHandler,
  deleteHandler,
  field,
}: Props) => {
  const { width } = useWindowDimensions()
  const isLarge = width >= BREAKPOINTS.lg
  const { t } = useTranslation()
  const { label, key } = field

  return (
    <div
      className="grid grid-cols-1 gap-3 lg:grid-cols-[2fr_2fr_1fr_0.75fr]"
      key={key}
    >
      <div className="flex flex-col" ref={typeRef}>
        <label className="pb-1.5 lg:hidden">
          {t('details.premises-form.labels.type')}
        </label>
        <span className="border-blue-gray flex h-full min-h-[48px] w-full items-center rounded-sm border pl-6">
          {t(label)}
        </span>
      </div>
      <div ref={nameRef}>
        <Field name={key + '-name'}>
          {({ field, meta }: FieldProps) => (
            <Input
              {...field}
              placeholder="Text eingeben erforderlich"
              label={
                !isLarge ? t('details.premises-form.labels.name') : undefined
              }
              id={key + '-name'}
              error={meta.touched && meta.error ? meta.error : undefined}
              className="min-h-[48px]"
              errorPosition="bottom"
            />
          )}
        </Field>
      </div>
      <div ref={squareRef}>
        <Field name={key + '-square'}>
          {({ field, meta }: FieldProps) => (
            <Input
              {...field}
              placeholder="1,00"
              label={
                !isLarge ? t('details.premises-form.labels.square') : undefined
              }
              id={key + '-square'}
              error={meta.touched && meta.error ? meta.error : undefined}
              className="min-h-[48px]"
              errorPosition="bottom"
            />
          )}
        </Field>
      </div>
      <div className="flex gap-3">
        <Button
          className="bg-charcoal hover:bg-seafoam-green h-[48px] w-full p-0 lg:w-[48px]"
          onClick={deleteHandler}
        >
          <Icon id="deleteIcon" className="h-[24px] w-[24px]" />
        </Button>
        <Button
          className="bg-charcoal hover:bg-seafoam-green h-[48px] w-full p-0 lg:w-[48px]"
          onClick={addHandler}
        >
          <Icon id="roundedSmallPlusIcon" className="h-[24px] w-[24px]" />
        </Button>
      </div>
    </div>
  )
}
