import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Logo from '../../atoms/logo'
import Button from '../../atoms/button'
import LanguageSwitcher from '../../molecules/language-switcher'
import { cn } from '../../../helpers/ui.ts'
import { useWindowDimensions } from '../../../helpers/hooks/useWindowDimensions.ts'
import { usePathname } from '../../../helpers/hooks/usePathname.ts'
import { BREAKPOINTS } from '../../../helpers/common.ts'
import Dropdown from '../../atoms/dropdown'

interface Props {
  className?: string
}

const Header = ({ className }: Props) => {
  const { t } = useTranslation()
  const { width } = useWindowDimensions()
  const [open, setOpen] = useState(false)
  const isMedium = width > BREAKPOINTS.md
  const navigation = useNavigate()
  const pathname = usePathname()

  console.log(pathname)

  const goToHomePage = () => {
    if (pathname === '/' || pathname === '') return
    navigation('/')
  }

  useEffect(() => {
    if (isMedium) {
      setOpen(false)
    }
  }, [isMedium])

  return (
    <header className={cn('z-100 w-full bg-transparent flex justify-between py-[1.875rem]', className)}>
      <div className="flex items-center gap-6 cursor-pointer" onClick={goToHomePage}>
        <Logo />
        <span className="font-600 uppercase tracking-[3px]">Immobilien Suche</span>
      </div>
      <div className={cn('hidden', {
        'header-buttons_container flex items-center gap-6': isMedium,
      })}>
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
      <div className={cn('flex items-center gap-6', {
        'hidden': isMedium,
      })}>
        <LanguageSwitcher />
        <Dropdown label="Menu" open={open} setOpen={setOpen}>
          <div className="flex flex-col items-center gap-3">
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
          </div>
        </Dropdown>
      </div>
    </header>
  )
}

export default Header