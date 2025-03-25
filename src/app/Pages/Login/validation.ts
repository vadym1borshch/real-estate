import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'

export const useValidationLoginSchema = () => {
  const { t } = useTranslation()

  return Yup.object({
    email: Yup.string()
      .email(t('validation.email'))
      .required(t('validation.required')),
    password: Yup.string()
      .required(t('validation.required')),
  })
}