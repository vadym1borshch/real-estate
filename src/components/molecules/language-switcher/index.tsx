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
    const lang = e.currentTarget.innerText.toLowerCase() as Language;
    i18n.changeLanguage(lang);

    const currentParams = new URLSearchParams(window.location.search).toString();
    const newUrl = `/${lang}${currentParams ? `?${currentParams}` : ''}`;

    window.history.pushState(null, '', newUrl);
    setCurrentLanguage(lang);
  };

  useEffect(() => {
    const lang = localStorage.getItem('i18nextLng')
    if (lang) {
      setCurrentLanguage(lang as Language)
    }
  }, [])

  return (
    <Dropdown open={open} setOpen={setOpen} label={currentLanguage.toUpperCase()}>
      <Button size="sm" variant="text" onClick={changeLanguage}>EN</Button>
      <Button size="sm" variant="text" onClick={changeLanguage}>DE</Button>
      <Button size="sm" variant="text" onClick={changeLanguage}>UA</Button>
    </Dropdown>
  )
}

export default LanguageSwitcher