import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'

export const useValidationRegisterSchema = () => {
  const { t } = useTranslation()

  return Yup.object({
    firstName: Yup.string()
      .min(3, t('validation.message_min', { value: '3' }))
      .required(t('validation.required')),
    lastName: Yup.string()
      .min(3, t('validation.message_min', { value: '3' }))
      .required(t('validation.required')),
    email: Yup.string()
      .email(t('validation.email'))
      .required(t('validation.required')),
    password: Yup.string()
      .required(t('validation.required')).min(8, t('validation.message_min', { value: '8' })),
    termsOfUse: Yup.boolean().oneOf([true], t('validation.required')),
  })
}