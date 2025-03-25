import { Field, FieldProps, Form, Formik } from 'formik'
import Input from '../../../../components/atoms/input'
import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'
import { useDetectCardSystem } from './helper.ts'
import Button from '../../../../components/atoms/button'

const cardNumberReg = /^\d{13,19}$/
const currentYear = new Date().getFullYear() % 100
const cvvReg = /^\d{3,4}$/
const onlyNumbersReg = /\D/g

const validationSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .matches(cardNumberReg, 'Invalid card number')
    .required('Required'),
  validPeriod: Yup.string()
    .test('valid-format', 'Invalid format', (value) => {
      if (!value) return false
      const [mm, yy] = value.split('/')
      if (!mm || !yy || mm.length !== 2 || yy.length !== 2) return false
      const month = parseInt(mm)
      const year = parseInt(yy)
      return month >= 1 && month <= 12 && year >= currentYear
    })
    .required('Required'),
  cvv: Yup.string().matches(cvvReg, 'Invalid CVV').required('Required'),
})

interface Props {
  submitHandler: (values: {
    cardNumber: string
    validPeriod: string
    cvv: string
    system: string | null
  }) => void
}

export const AddCardForm = ({submitHandler}: Props) => {
  const { t } = useTranslation()
  const defineCardSystem = useDetectCardSystem()

  return (
    <Formik
      initialValues={{
        cardNumber: '',
        validPeriod: '',
        cvv: '',
        system: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (_values, { resetForm }) => {
        submitHandler(_values)
        resetForm()
      }}
    >
      {({ isValid, dirty }) => (
        <Form className="flex w-full flex-col gap-3 items-center max-w-[320px]">
          <Field name="cardNumber">
            {({ field, meta, form }: FieldProps) => {
              return (
                <Input
                  {...field}
                  placeholder={t('payments.card-number')}
                  id="cardNumber"
                  value={field.value}
                  onChange={(e) => {
                    const value = e.currentTarget.value
                    const onlyDigits = value.replace(onlyNumbersReg, '')
                    const system = defineCardSystem(onlyDigits)
                    form.setFieldValue('cardNumber', onlyDigits)
                    form.setFieldValue('system', system)
                  }}
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="min-h-[48px]"
                  errorPosition="bottom"
                  iconId="bankCardIcon"
                  iconSide="left"
                />
              )
            }}
          </Field>
          <div className="grid grid-cols-[2fr_1fr] gap-3">
            <Field name="validPeriod">
              {({ field, meta, form }: FieldProps) => (
                <Input
                  {...field}
                  placeholder={t('payments.validity-period')}
                  id="validPeriod"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  value={field.value}
                  onChange={(e) => {
                    const input = e.currentTarget.value
                    const currentYear = new Date().getFullYear() % 100

                    const cleaned = input.replace(onlyNumbersReg, '').slice(0, 4)

                    form.setFieldValue('validPeriod', cleaned)

                    if (cleaned.length < 4) {
                      form.setFieldError('validPeriod', undefined)
                      return
                    }

                    const mm = cleaned.slice(0, 2)
                    const yy = cleaned.slice(2)

                    const month = parseInt(mm, 10)
                    const year = parseInt(yy, 10)

                    if (month < 1 || month > 12) {
                      form.setFieldTouched('validPeriod', true, false)
                      form.setFieldError('validPeriod', t('payments.invalid-month'))
                      return
                    }

                    if (year < currentYear) {
                      form.setFieldTouched('validPeriod', true, false)
                      form.setFieldError('validPeriod', t('payments.invalid-year'))
                      return
                    }
                    form.setFieldValue('validPeriod', `${mm}/${yy}`)
                    form.setFieldError('validPeriod', undefined)
                  }}
                  className="min-h-[48px] px-4"
                  errorPosition="bottom"
                />
              )}
            </Field>
            <Field name="cvv">
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="CVV / CVC"
                  id="cvv"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="min-h-[48px] px-4"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </div>
          <Button type="submit" className="w-full" disabled={!isValid || !dirty}>
            {t('common.add-card')}
          </Button>
        </Form>
      )}
    </Formik>
  )
}
