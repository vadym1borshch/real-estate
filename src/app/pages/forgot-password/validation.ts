import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'

export const useValidationForgotPasswordSchema = (step: number) => {
  const { t } = useTranslation()

  if (step === 1) {
    return Yup.object({
      email: Yup.string()
        .email(t('validation.email'))
        .required(t('validation.required')),
    })
  }
  if (step === 2) {
    return Yup.object({
      verificationCode: Yup.string()
        .required(t('validation.required'))
        .min(5, t('validation.message_min', { value: '5' })),
    })
  }

  return Yup.object({
    password: Yup.string()
      .required(t('validation.required'))
      .min(8, t('validation.message_min', { value: '8' })),
  })
}
