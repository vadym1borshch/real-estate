import { useTranslation } from 'react-i18next'

type Props = {
  pluralText: string
  singularText: string
  numberValue: number
  extraText: string
}

export const useDayTransformation = ({
  pluralText,
  singularText,
  extraText,
  numberValue,
}: Props) => {
  const { i18n } = useTranslation()
  const enPluralText = `${pluralText} ${extraText}`
  const enSingularText = `${singularText} ${extraText}`
  const uaPluralText = `${pluralText} тому`
  const uaSingularText = `${singularText} тому`
  const uaExtraText = `${extraText} тому`

  if (i18n.language === 'en') {
    return `${numberValue} ${numberValue === 1 ? enSingularText : enPluralText}`
  }

  if (i18n.language === 'de') {
    return `${numberValue === 1 ? `${extraText} ${numberValue} ${singularText}` : `${extraText} ${numberValue} ${pluralText}`}`
  }

  if (i18n.language === 'ua') {
    const lastTwoDigits = Math.abs(numberValue) % 100
    const lastDigit = Math.abs(numberValue) % 10

    if (lastTwoDigits > 10 && lastTwoDigits < 20) {
      return `${numberValue} ${uaExtraText}`
    }

    if (lastDigit === 1) {
      return `${numberValue} ${uaSingularText}`
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
      return `${numberValue} ${uaPluralText}`
    }

    return `${numberValue} ${uaExtraText}`
  }

  return ''
}
