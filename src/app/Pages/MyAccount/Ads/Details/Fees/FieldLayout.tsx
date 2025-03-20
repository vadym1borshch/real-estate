import { Field, FieldProps } from 'formik'
import Input from '../../../../../../components/atoms/input'
import Button from '../../../../../../components/atoms/button'
import Icon from '../../../../../../components/atoms/icon'
import { RefObject } from 'react'
import { useWindowDimensions } from '../../../../../../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../../../../../../helpers/common.ts'
import { useTranslation } from 'react-i18next'

interface Props {
  nameRef: RefObject<HTMLDivElement | null>
  percentRef: RefObject<HTMLDivElement | null>
  additionalInfoRef: RefObject<HTMLDivElement | null>
  field: {
    id: string
    name: string
    percent: string
    additional_info: string
    key: string
  }
  onChange: (key: string, value: string) => void
  addHandler: () => void
}

export const FieldLayout = ({
  nameRef,
  percentRef,
  additionalInfoRef,
  field,
  onChange,
  addHandler,
}: Props) => {
  const { width } = useWindowDimensions()
  const isLarge = width >= BREAKPOINTS.lg
  const { t } = useTranslation()

  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-[2fr_1.25fr_2fr_1fr]">
      <div ref={nameRef}>
        <Field name={`${field.key}-name`}>
          {({ field: inputField }: FieldProps) => (
            <Input
              id={`${field.key}-name`}
              label={!isLarge ? t('details.fees-form.labels.fee') : undefined}
              {...inputField}
              value={t(field.name)}
              onChange={(e) => onChange(`${field.key}-name`, e.target.value)}
            />
          )}
        </Field>
      </div>
      <div ref={percentRef}>
        <Field name={`${field.key}-percent`}>
          {({ field: inputField }: FieldProps) => (
            <Input
              id={`${field.key}-percent`}
              label={
                !isLarge ? t('details.fees-form.labels.percent') : undefined
              }
              {...inputField}
            />
          )}
        </Field>
      </div>
      <div ref={additionalInfoRef}>
        <Field name={`${field.key}-additional_info`}>
          {({ field: inputField }: FieldProps) => (
            <Input
              id={`${field.key}-additional_info`}
              label={
                !isLarge
                  ? t('details.fees-form.labels.extra-information')
                  : undefined
              }
              {...inputField}
            />
          )}
        </Field>
      </div>
      <div className="flex gap-3">
        <Button
          className="bg-charcoal hover:bg-seafoam-green h-[48px] w-full p-0 lg:w-[48px]"
          onClick={() => {}}
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
