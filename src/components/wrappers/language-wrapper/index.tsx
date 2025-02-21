import { Fragment, ReactNode, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import i18next from 'i18next'
import { DEFAULT_LANG, STORAGE_KEY, SUPPORTED_LANGUAGES } from '../../../common/constants.ts'
import { usePathname } from '../../../helpers/hooks/usePathname.ts'

export const LanguageWrapper = ({ children }: { children: ReactNode }) => {
  const { lang } = useParams<{ lang: string }>()
  const pathname = usePathname()
  const navigate = useNavigate()
  const [currentLang, setCurrentLang] = useState(i18next.language)

  useEffect(() => {
    const savedLang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG
    const isLangValid = SUPPORTED_LANGUAGES.some(item => item === lang)


    if (!isLangValid) {
      navigate(`/${savedLang}/${pathname || '/'}`, { replace: true })
      return
    }

    if (i18next.language !== lang) {
      i18next.changeLanguage(lang).catch(console.error)
    }

    localStorage.setItem(STORAGE_KEY, lang)
    setCurrentLang(lang)
  }, [lang, pathname, navigate])

  useEffect(() => {
    i18next.on('languageChanged', setCurrentLang)
    return () => {
      i18next.off('languageChanged', setCurrentLang)
    }
  }, [])

  return (
    <Fragment key={currentLang as string}>{children}</Fragment>
  )
}
