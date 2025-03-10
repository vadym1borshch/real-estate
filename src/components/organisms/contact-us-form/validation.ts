import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'

export const useValidationSchema = () => {
  const { t } = useTranslation()

  return Yup.object({
    name: Yup.string()
      .min(3, t('validation.message_min', { value: '3' }))
      .required(t('validation.required')),
    lastName: Yup.string()
      .min(3, t('validation.message_min', { value: '3' }))
      .required(t('validation.required')),
    email: Yup.string()
      .email(t('validation.email'))
      .required(t('validation.required')),
    phone: Yup.string()
      .matches(/^[+\d\s]+$/, t('validation.phone'))
      .required(t('validation.required')),
    message: Yup.string()
      .min(10, t('validation.message_min', { value: '10' }))
      .required(t('validation.required')),
    agree: Yup.boolean().oneOf([true], t('validation.required')),
  })
}