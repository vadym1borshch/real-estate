import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Logo from '../../atoms/logo'
import Button from '../../atoms/button'
import LanguageSwitcher from '../../molecules/language-switcher'
import { cn } from '../../../helpers/ui.ts'
import { useWindowDimensions } from '../../../helpers/hooks/useWindowDimensions.ts'
import { usePathname } from '../../../helpers/hooks/usePathname.ts'
import { useNavigate } from '../../../helpers/hooks/useNavigate.ts'
import MobileMenu from '../../molecules/mobile-menu'
import { initialButtons } from './mock.ts'
import { useAppDispatch, useAppSelector } from '../../../store'
import { selectUser } from '../../../store/userSlice/selectors.ts'
import { ROUTES } from '../../../@constants/routes.ts'
import { BREAKPOINTS } from '../../../@constants'
import { setListingType } from '../../../store/estateSlice'
import { truncateTextByChars } from '../../../helpers'

interface Props {
  className?: string
}

const Header = ({ className }: Props) => {
  const { t } = useTranslation()
  const user = useAppSelector(selectUser)
  const { width } = useWindowDimensions()
  const navigate = useNavigate()
  const isMedium = width > BREAKPOINTS.MD
  const isSmall = width < BREAKPOINTS.MD
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()

  const goToHomePage = () => {
    if (pathname === ROUTES.HOME) return
    navigate('')
  }

  useEffect(() => {
    if (isMedium) {
      setOpen(false)
    }
  }, [isMedium])

  return (
    <header
      className={cn(
        'z-1001 flex w-full max-w-[72.5rem] justify-between bg-transparent pt-[0.875rem] pb-6 lg:py-[1.875rem]',
        className
      )}
    >
      <div
        className="flex cursor-pointer items-center gap-3 md:gap-6"
        onClick={goToHomePage}
      >
        <Logo />
        <span className="font-600 text-[10px] tracking-[3px] uppercase md:text-base">
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
            childrenClassName="truncate "
            onClick={() => {
              if (button.id === 'buy' || button.id === 'rent') {
                dispatch(setListingType(button.id))
              }
              navigate(button.href)
            }}
          >
            {isSmall
              ? truncateTextByChars(t(button.title), 12)
              : t(button.title)}
          </Button>
        ))}
        <Button
          size="sm"
          className="bg-charcoal hover:bg-seafoam-green focus:border-seafoam-green px-4 whitespace-nowrap focus:border-4 focus:outline-none"
          onClick={() => {
            if (!user) {
              navigate(ROUTES.LOGIN)
              return
            }
            navigate(ROUTES.MY_ACCOUNT)
          }}
        >
          {!user ? t('buttons.sign-in') : t('my-account.title')}
        </Button>
        <LanguageSwitcher />
      </div>
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  )
}

export default Header
