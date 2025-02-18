import Logo from '../../atoms/logo'
import Button from '../../atoms/button'
import LanguageSwitcher from '../../molecules/language-switcher'
import { useTranslation } from 'react-i18next'
import { cn } from '../../../helpers/ui.ts'

interface Props {
  className?: string
}

const Header = ({ className }: Props) => {
  const { t } = useTranslation()
  return (
    <div className={cn('z-100 w-full bg-transparent flex justify-between py-[3.125rem]', className)}>
      <Logo />
      <div className="header-buttons_container flex items-center gap-6">
        <Button
          size="sm"
          variant="text"
          onClick={() => {
          }}
        >
          {t('real-estate.operations.buy')}
        </Button>
        <Button
          size="sm"
          variant="text"
          onClick={() => {
          }}
        >
          {t('real-estate.operations.rent')}
        </Button>
        <Button
          size="sm"
          variant="text"
          onClick={() => {
          }}
        >
          {t('buttons.place-advertisement')}
        </Button>
        <Button
          size="sm"
          className="bg-charcoal px-4 hover:bg-seafoam-green focus:border-4 focus:border-seafoam-green focus:outline-none"
          onClick={() => {
          }}
        >
          {t('buttons.sign-in')}
        </Button>
        <LanguageSwitcher />
      </div>
    </div>
  )
}

export default Header