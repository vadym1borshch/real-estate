import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'

export const useValidationSchema = () => {
  const { t } = useTranslation()

  return Yup.object({
    name: Yup.string().min(3, t('validation.message_min', { value: '3' })),
    lastName: Yup.string().min(3, t('validation.message_min', { value: '3' })),
    email: Yup.string().email(t('validation.email')),
    phone: Yup.string().matches(/^[+\d\s]+$/, t('validation.phone')),
  })
}
