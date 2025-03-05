import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import Button from '../../atoms/button'
import { usePathname } from '../../../helpers/hooks/usePathname.ts'
import { cn } from '../../../helpers/ui.ts'

type Language = 'en' | 'de' | 'ua'
const languages: Language[] = ['en', 'de', 'ua']

interface Props {
  className?: string
}

const LanguageSwitcher = ({ className }: Props) => {
  const { i18n } = useTranslation()
  const path = usePathname()

  const [currentLanguage, setCurrentLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLang = localStorage.getItem('i18nextLng')
    if (savedLang && languages.includes(savedLang as Language)) {
      setCurrentLanguage(savedLang as Language)
    }
  }, [])

  const switchLanguage = () => {
    const currentIndex = languages.indexOf(currentLanguage)
    const nextIndex = (currentIndex + 1) % languages.length
    const nextLanguage = languages[nextIndex]

    i18n.changeLanguage(nextLanguage)
    localStorage.setItem('i18nextLng', nextLanguage)

    const currentParams = new URLSearchParams(window.location.search).toString()
    const newUrl = `/${nextLanguage}${path}${currentParams ? `?${currentParams}` : ''}`
    window.history.pushState(null, '', newUrl)

    setCurrentLanguage(nextLanguage)
  }

  return (
    <Button
      size="sm"
      variant="outlined"
      onClick={switchLanguage}
      className={cn('!border-0', className)}
    >
      {currentLanguage.toUpperCase()}
    </Button>
  )
}

export default LanguageSwitcher
