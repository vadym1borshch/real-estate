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
          livingAreaM2: Yup.string().required(t('validation.required')),
          floors: Yup.string()
            .required(t('validation.required'))
            .matches(
              /^[0-9\s]+\|\s*[0-9\s]+$|^[0-9]+$/,
              t('validation.only_numbers_and_pipe')
            )
            .test(
              'valid-format',
              t('validation.invalid_floors_format'),
              (value) => {
                if (!value) return false
                // Перевіряємо що є тільки один символ пайпу
                const pipeCount = (value.match(/\|/g) || []).length
                if (pipeCount > 1) return false

                // Перевіряємо що пайп не на початку і не в кінці
                if (value.startsWith('|') || value.endsWith('|')) return false

                // Перевіряємо що числа навколо пайпу валідні
                const parts = value.split('|').map((part) => part.trim())
                if (parts.length === 2) {
                  const [first, second] = parts
                  const firstNum = parseInt(first)
                  const secondNum = parseInt(second)
                  return (
                    !isNaN(firstNum) &&
                    !isNaN(secondNum) &&
                    firstNum < secondNum
                  )
                }

                // Якщо немає пайпу, перевіряємо що це просто число
                return !isNaN(parseInt(value))
              }
            ),
          price: Yup.string().required(t('validation.required')),
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
