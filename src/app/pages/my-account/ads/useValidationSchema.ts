import { useTranslation } from 'react-i18next'
import * as Yup from 'yup'
import { useMemo } from 'react'

export const useValidationSchema = (validate: boolean) => {
  const { t } = useTranslation()

  return useMemo(() => {
    return validate
      ? Yup.object({
        typeKey: Yup.string().required(t('validation.required')),
        label: Yup.string().required(t('validation.required')),
        country: Yup.string().required(t('validation.required')),
        city: Yup.string().required(t('validation.required')),
        yearBuilt: Yup.string().required(t('validation.required')),
        floors: Yup.string()
          .required(t('validation.required')),
        price: Yup.string()
          .required(t('validation.required')),
        addressLat: Yup.number()
          .transform((_, original) => Number(original))
          .required(t('validation.required')),
        addressLng: Yup.number()
          .transform((_, original) => Number(original))
          .required(t('validation.required')),
        state: Yup.string().required(t('validation.required')),
        bathroomsTotal: Yup.string().nullable(),
      })
      : Yup.object({
        addressLat: Yup.number().nullable(),
        addressLng: Yup.number().nullable(),
      })
  }, [validate])
}