import { useTranslation } from 'react-i18next'
import { Field, FieldProps, Form, Formik } from 'formik'
import Input from '../../../../components/atoms/input'
import { useValidationSchema } from './validation.ts'
import { Agent } from '../../ServiceAround/mock.ts'

interface Props {
  user: Agent
}

export const ProfileForm = ({ user }: Props) => {
  const { t } = useTranslation()
  /*  const handleSubmit = () =>
      // leave for next use params
      /!*    values: FormikValues,
          errors?: FormikErrors<FormikValues>*!/ {
      if (callback) {
        callback()
      }
    }*/

  return (
    <Formik
      initialValues={{
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
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
                  label={`${t('contact-us.form.name')}`}
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
                  label={`${t('contact-us.form.last-name')}`}
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
                  label={`${t('contact-us.form.email')}`}
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
                  label={`${t('contact-us.form.tel')}`}
                  id="phone"
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="placeholder-gray min-h-[48px]"
                  errorPosition="bottom"
                />
              )}
            </Field>
          </div>
        </Form>
      )}
    </Formik>
  )
}
