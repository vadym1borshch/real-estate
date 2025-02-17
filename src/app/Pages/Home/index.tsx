import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../../../components/molecules/language-switcher'
import LinkCard from '../../../components/molecules/link-card'


export const HomePage = () => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col gap-4 w-full justify-center">
      <h1>{t('title')}</h1>
      <LanguageSwitcher />

      <LinkCard />
    </div>
  )
}
