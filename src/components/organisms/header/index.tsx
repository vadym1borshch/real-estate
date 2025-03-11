import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Logo from '../../atoms/logo'
import Button from '../../atoms/button'
import LanguageSwitcher from '../../molecules/language-switcher'
import { cn } from '../../../helpers/ui.ts'
import { useWindowDimensions } from '../../../helpers/hooks/useWindowDimensions.ts'
import { usePathname } from '../../../helpers/hooks/usePathname.ts'
import { BREAKPOINTS } from '../../../helpers/common.ts'
import { useNavigate } from '../../../helpers/hooks/useNavigate.ts'
import MobileMenu from '../../molecules/mobile-menu'
import { initialButtons } from './mock.ts'

interface Props {
  className?: string
}

const Header = ({ className }: Props) => {
  const { t } = useTranslation()
  const { width } = useWindowDimensions()
  const navigate = useNavigate()
  const isMedium = width > BREAKPOINTS.md
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const goToHomePage = () => {
    if (pathname === '/' || pathname === '') return
    navigate('/')
  }

  useEffect(() => {
    if (isMedium) {
      setOpen(false)
    }
  }, [isMedium])

  return (
    <header
      className={cn(
        'z-1001 flex w-full justify-between bg-transparent py-[1.875rem]',
        className
      )}
    >
      <div
        className="flex cursor-pointer items-center gap-6"
        onClick={goToHomePage}
      >
        <Logo />
        <span className="font-600 tracking-[3px] uppercase">
          Immobilien Suche
        </span>
      </div>
      <div
        className={cn('hidden', {
          'header-buttons_container flex items-center gap-6': isMedium,
        })}
      >
        {initialButtons.map((button) => (
          <Button
            key={button.id}
            size="sm"
            variant="text"
            onClick={() => navigate(button.href)}
          >
            {t(button.title)}
          </Button>
        ))}
        <Button
          size="sm"
          className="bg-charcoal hover:bg-seafoam-green focus:border-seafoam-green px-4 focus:border-4 focus:outline-none"
          onClick={() => {}}
        >
          {t('buttons.sign-in')}
        </Button>
        <LanguageSwitcher />
      </div>
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  )
}

export default Header
