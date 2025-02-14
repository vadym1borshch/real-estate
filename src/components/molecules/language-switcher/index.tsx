import { useTranslation } from 'react-i18next'
import { MouseEvent, useEffect, useState } from 'react'
import Dropdown from '../../atoms/dropdown'
import Button from '../../atoms/button'

type Language = 'en' | 'de' | 'ua'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const [currentLanguage, setCurrentLanguage] = useState<Language>('en')
  const [open, setOpen] = useState(false)

  const changeLanguage = (e: MouseEvent<HTMLButtonElement>) => {
    const lang = e.currentTarget.innerText.toLowerCase() as Language
    i18n.changeLanguage(lang)
    window.history.pushState(null, '', `/${lang}`)
    setCurrentLanguage(lang as Language)
  }

  useEffect(() => {
    const lang = localStorage.getItem('i18nextLng')
    if (lang) {
      setCurrentLanguage(lang as Language)
    }
  }, [])

  return (
    <Dropdown open={open} setOpen={setOpen} label={currentLanguage.toUpperCase()}>
      <div
        className="flex flex-col justify-center items-center w-fit border-transparent outline-none ring-0 focus:outline-none focus:ring-0 ">
        <Button size="sm" variant="text" onClick={changeLanguage}>EN</Button>
        <Button size="sm" variant="text" onClick={changeLanguage}>DE</Button>
        <Button size="sm" variant="text" onClick={changeLanguage}>UA</Button>
      </div>
    </Dropdown>
  )
}

export default LanguageSwitcher