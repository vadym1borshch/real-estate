import { useTranslation } from 'react-i18next'
import { Field, FieldProps, Form, Formik } from 'formik'
import { useValidationForgotPasswordSchema } from './validation.ts'
import Input from '../../../components/atoms/input'
import Button from '../../../components/atoms/button'

interface Props {
  paragraph: string
  onClick: () => void
  buttonText: string
  step: number
}

export const Step = ({ paragraph, buttonText, onClick, step }: Props) => {
  const { t } = useTranslation()

  const stepConfig: Record<
    number,
    {
      id: string
      label: string
      placeholder: string
      initialValues: Record<string, string>
    }
  > = {
    1: {
      id: 'email',
      label: t('forgot-password.input.step1.label'),
      placeholder: t('forgot-password.input.step1.placeholder'),
      initialValues: { email: '' },
    },
    2: {
      id: 'verificationCode',
      label: t('forgot-password.input.step2.label'),
      placeholder: t('forgot-password.input.step2.placeholder'),
      initialValues: { verificationCode: '' },
    },
    3: {
      id: 'password',
      label: t('forgot-password.input.step3.label'),
      placeholder: t('forgot-password.input.step3.placeholder'),
      initialValues: { password: '' },
    },
  }

  const current = stepConfig[step]

  return (
    <div className="flex flex-col gap-6">
      <p>{paragraph}</p>
      <Formik
        key={step}
        initialValues={current.initialValues}
        onSubmit={async () => {
          onClick()
        }}
        validationSchema={useValidationForgotPasswordSchema(step)}
      >
        {({ isValid, dirty }) => (
          <Form className="flex w-full flex-col gap-6">
            <Field name={current.id}>
              {({ field, meta }: FieldProps) => (
                <Input
                  {...field}
                  label={current.label}
                  placeholder={current.placeholder}
                  error={meta.touched && meta.error ? meta.error : undefined}
                  className="min-h-[48px]"
                  id={current.id}
                />
              )}
            </Field>
            <Button className="w-full" disabled={!isValid || !dirty} type="submit">
              {buttonText}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
