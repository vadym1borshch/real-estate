import { ReactNode, useState } from 'react'
import { cn } from '../../../../../helpers/ui.ts'
import { useTranslation } from 'react-i18next'
import { Field, FieldArray, FieldArrayRenderProps, FieldProps } from 'formik'
import Input from '../../../../../components/atoms/input'
import Dropdown from '../../../../../components/atoms/dropdown'
import RadioButton from '../../../../../components/atoms/radio-button'
import Button from '../../../../../components/atoms/button'
import Icon from '../../../../../components/atoms/icon'

export const FieldWrapper = ({
  children,
  label,
  extra,
  className,
}: {
  children: ReactNode
  label: string
  extra?: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 items-center gap-1.5 lg:grid-cols-2',
        className
      )}
    >
      <label className="flex w-full gap-3">
        {label} {extra ? <span>{extra}</span> : null}
      </label>
      {children}
    </div>
  )
}

export const FormInputWrapper = ({
  fieldName,
  placeholder,
}: {
  fieldName: string
  placeholder?: string
}) => {
  const { t } = useTranslation()
  return (
    <Field name={fieldName}>
      {({ field, meta }: FieldProps) => (
        <Input
          {...field}
          placeholder={placeholder || t('details.details-form.placeholder')}
          id={fieldName}
          error={meta.touched && meta.error ? meta.error : undefined}
          className="min-h-12"
          errorPosition="bottom"
        />
      )}
    </Field>
  )
}

export const FormDropdownWrapper = ({
  fieldName,
  dropdownElements,
}: {
  fieldName: string
  dropdownElements: { value: string; title: string }[]
}) => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  return (
    <Field name={fieldName}>
      {({ field, form, meta }: FieldProps) => {
        const label = dropdownElements.find((el) => el.value === field.value)
        return (
          <div>
            <Dropdown
              label={
                field.value ? t(label?.title) : t('details.details-form.choose')
              }
              open={open}
              setOpen={(value: boolean) => setOpen(value)}
              id={fieldName}
              variant="outlined"
              withIcon
              triggerButtonClassName="min-h-12 w-full"
              dropdownClassName="top-16 md:top-14 lg:top-12 "
            >
              <div className="flex flex-col">
                {dropdownElements.map((el) => {
                  return (
                    <span
                      className="hover:bg-charcoal py-3 pl-3 hover:text-white"
                      key={el.value}
                      onClick={() => {
                        form.setFieldValue(fieldName, el.value)
                        setOpen(false)
                      }}
                    >
                      {t(el.title)}
                    </span>
                  )
                })}
              </div>
            </Dropdown>
            {!field.value && meta.touched && meta.error ? (
              <span className="text-red flex w-full justify-end">
                {' '}
                <Icon id="errorIconRed" className="h-6 max-w-6 min-w-6" />
                {meta.error}
              </span>
            ) : null}
          </div>
        )
      }}
    </Field>
  )
}

export const FormRadioWrapper = ({ fieldName }: { fieldName: string }) => {
  const { t } = useTranslation()
  return (
    <Field name={fieldName}>
      {({ field, form }: FieldProps) => (
        <div className="flex items-center gap-6 py-3">
          <RadioButton
            label={t('details.details-form.yes')}
            name={fieldName}
            value="Yes"
            checked={field.value === 'yes'}
            onChange={() => form.setFieldValue(fieldName, 'yes')}
          />
          <RadioButton
            label={t('details.details-form.no')}
            name={fieldName}
            value="No"
            checked={field.value === 'no'}
            onChange={() => form.setFieldValue(fieldName, 'no')}
          />
        </div>
      )}
    </Field>
  )
}

export const FormLayoutButtons = ({
  handleSave,
  handleNext,
}: {
  handleSave: () => void
  handleNext: () => void
}) => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col gap-3 pt-[3.75rem] whitespace-nowrap md:flex-row lg:pt-[5.625rem]">
      <Button
        size="sm"
        className="w-full lg:w-fit"
        type="submit"
        onClick={handleSave}
      >
        {t('buttons.save')}
      </Button>
      <Button
        size="sm"
        className="bg-charcoal hover:bg-seafoam-green w-full whitespace-nowrap text-white lg:w-fit"
        onClick={handleNext}
      >
        {t('buttons.next-page')}
      </Button>
    </div>
  )
}

export const ActionsButtonsWrapper = ({
  deleteHandler,
  addHandler,
}: {
  deleteHandler: () => void
  addHandler: () => void
}) => {
  return (
    <div className="flex gap-3">
      <Button
        className="bg-charcoal hover:bg-seafoam-green h-12 w-full p-0 lg:w-12"
        onClick={deleteHandler}
      >
        <Icon id="deleteIcon" className="h-6 w-6" />
      </Button>
      <Button
        className="bg-charcoal hover:bg-seafoam-green h-12 w-full p-0 lg:w-12"
        onClick={addHandler}
      >
        <Icon id="roundedSmallPlusIcon" className="h-6 w-6" />
      </Button>
    </div>
  )
}

interface MainFormWrapperProps {
  children: (props: FieldArrayRenderProps) => ReactNode
  onSubmit: () => void
  formHeaderValues: {
    firstColumnWidth: number
    secondColumnWidth: number
    thirdColumnWidth: number
    firstColumnLabel: string
    secondColumnLabel: string
    thirdColumnLabel: string
  }
  name: string
  handleSave: () => void
  handleNext: () => void
}

export const MainFormWrapper = ({
  children,
  onSubmit,
  formHeaderValues,
  name,
  handleSave,
  handleNext,
}: MainFormWrapperProps) => {
  const {
    firstColumnWidth,
    secondColumnWidth,
    thirdColumnWidth,
    firstColumnLabel,
    secondColumnLabel,
    thirdColumnLabel,
  } = formHeaderValues

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <div
        className={`-mb-1.5 hidden gap-3 lg:grid`}
        style={{
          gridTemplateColumns: `${firstColumnWidth}px ${secondColumnWidth}px ${thirdColumnWidth}px`,
        }}
      >
        <label>{firstColumnLabel}</label>
        <label>{secondColumnLabel}</label>
        <label>{thirdColumnLabel}</label>
      </div>

      <FieldArray name={name}>{children}</FieldArray>

      <FormLayoutButtons handleSave={handleSave} handleNext={handleNext} />
    </form>
  )
}
