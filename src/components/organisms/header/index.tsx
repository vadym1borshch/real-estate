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
import Drawer from '../../molecules/drawer'

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
        <Button size="sm" variant="text" onClick={() => {}}>
          {t('real-estate.operations.buy')}
        </Button>
        <Button size="sm" variant="text" onClick={() => {}}>
          {t('real-estate.operations.rent')}
        </Button>
        <Button size="sm" variant="text" onClick={() => {}}>
          {t('buttons.place-advertisement')}
        </Button>
        <Button
          size="sm"
          className="bg-charcoal hover:bg-seafoam-green focus:border-seafoam-green px-4 focus:border-4 focus:outline-none"
          onClick={() => {}}
        >
          {t('buttons.sign-in')}
        </Button>
        <LanguageSwitcher />
      </div>
      <div
        className={cn('flex items-center gap-6', {
          hidden: isMedium,
        })}
      >
        <Button onClick={() => setOpen(!open)}>MENU</Button>
        <Drawer open={open} setOpen={setOpen}>
          <div className="border-b-seafoam-green flex w-full justify-between border-b p-5">
            <div className="flex items-center gap-6">
              <Button
                size="sm"
                className="text-charcoal hover:bg-seafoam-green focus:border-seafoam-green h-[40px] min-w-[80px] bg-white px-4 focus:border-4 focus:outline-none"
                onClick={() => {}}
              >
                {t('buttons.sign-in')}
              </Button>
              <LanguageSwitcher className="hover:text-gray text-white" />
            </div>
            <Button
              className="hover:text-gray !border-0 text-white"
              variant="outlined"
              onClick={() => setOpen(!open)}
            >
              X
            </Button>
          </div>
          <div className="z-100000 flex h-full w-full flex-col gap-3 p-5">
            <Button
              size="sm"
              variant="text"
              onClick={() => {}}
              className="hover:text-gray text-white"
            >
              {t('real-estate.operations.buy')}
            </Button>
            <Button
              size="sm"
              variant="text"
              onClick={() => {}}
              className="hover:text-gray text-white"
            >
              {t('real-estate.operations.rent')}
            </Button>
            <Button
              size="sm"
              variant="text"
              onClick={() => {}}
              className="hover:text-gray text-white"
            >
              {t('buttons.place-advertisement')}
            </Button>
          </div>
        </Drawer>
      </div>
    </header>
  )
}

export default Header
