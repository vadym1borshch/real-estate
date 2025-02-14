import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import de from './de/translations.json'
import en from './en/translations.json'
import ua from './ua/translations.json'

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    supportedLngs: ['en', 'de', 'ua'],
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en,
      de,
      ua,
    }
  })

export default i18next
