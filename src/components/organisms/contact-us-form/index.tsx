import { Field, FieldProps, Form, Formik } from 'formik'
import Input from '../../atoms/input'
import TextArea from '../../atoms/text-area'
import Checkbox from '../../atoms/checkbox'
import Button from '../../atoms/button'
import { useTranslation } from 'react-i18next'
import { useValidationSchema } from './validation.ts'

interface Props {
  callback?: () => void
  textFieldRows?: number
  withAgreeField?: boolean
}

const ContactUsForm = ({ callback, textFieldRows, withAgreeField }: Props) => {
  const { t } = useTranslation()

  const handleSubmit = () =>
    // leave for next use params
    /*    values: FormikValues,
        errors?: FormikErrors<FormikValues>*/ {
    if (callback) {
      callback()
    }
  }

  return (
    <Formik
      initialValues={{
        name: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        agree: !withAgreeField,
      }}
      onSubmit={async (_values, { resetForm }) => {
        /* handleSubmit(values)*/
        resetForm()
      }}
      validationSchema={useValidationSchema()}
    >
      {({ isValid, dirty }) => (
        <Form className="flex w-full flex-col gap-3">
          <div className="flex flex-col gap-4 md:flex-row md:gap-10">
            <Field name={'name'}>
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="John"
                  label={`${t('contact-us.form.name')} *`}
                  id="email"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
            <Field name={'lastName'}>
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="Smith"
                  label={`${t('contact-us.form.last-name')} *`}
                  id="lastName"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:gap-10">
            <Field name={'email'}>
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="johnsmith@email.at"
                  label={`${t('contact-us.form.email')} *`}
                  id="email"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
            <Field name={'phone'}>
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  placeholder="+43 676 920 74 99"
                  label={`${t('contact-us.form.tel')} *`}
                  id="phone"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </div>
          <Field name={'message'}>
            {({ field, meta }: FieldProps) => (
              <TextArea
                {...field}
                rows={textFieldRows}
                placeholder={t('contact-us.form.message-placeholder')}
                label={`${t('contact-us.form.message')} *`}
                id="message"
                error={meta.touched && meta.error ? meta.error : undefined}
                className="placeholder-gray min-h-[48px]"
                errorPosition="bottom"
              />
            )}
          </Field>
          <div className="w-full">
            {withAgreeField &&
              <Field name={'agree'}>
                {({ field, form }: FieldProps) => (
                  <span
                    className="mt-3 mb-6 flex w-full cursor-pointer items-center gap-1.5"
                    onClick={() => {
                      form.setFieldValue('agree', !field.value)
                    }}
                  >
                    <Checkbox
                      {...field}
                      checked={field.value}
                      setChecked={(v) => {
                        form.setFieldValue('agree', v)
                      }}
                    />
                    {t('contact-us.form.agree-terms')}
                  </span>
                )}
              </Field>
            }

            <Button
              onClick={() => handleSubmit()}
              type="submit"
              disabled={!isValid || !dirty}
              className="w-full md:w-fit"
            >
              {t('contact-us.form.send')}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default ContactUsForm
