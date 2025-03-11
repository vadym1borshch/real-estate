import { useTranslation } from 'react-i18next'
import Button from '../../atoms/button'
import Icon from '../../atoms/icon'
import Drawer from '../../atoms/drawer'
import LanguageSwitcher from '../language-switcher'
import AuthButtons from '../auth-buttons'
import { useNavigate } from '../../../helpers/hooks/useNavigate.ts'
import { initialButtons } from '../../organisms/header/mock.ts'

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
}

const MobileMenu = ({open, setOpen}:Props) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <div className="flex items-center gap-6 md:hidden">
      <Button variant="outlined" className="h-fit w-fit !border-0 p-0">
        <Icon
          id="menuLineIcon"
          className="text-charcoal hover:text-blue-gray h-[24px] w-[24px]"
          onClick={() => setOpen(!open)}
        />
      </Button>
      <Drawer open={open} setOpen={setOpen}>
        <div className="flex w-full justify-between p-5">
          <div className="flex items-center gap-6">
            <Button
              size="sm"
              className="text-charcoal hover:bg-seafoam-green focus:border-seafoam-green h-[40px] min-w-[80px] bg-white px-4 focus:border-4 focus:outline-none"
              onClick={() => {}}
            >
              {t('buttons.sign-in')}
            </Button>
            <LanguageSwitcher className="hover:text-gray focus:!border-seafoam-green focus:!outline-seafoam-green text-white focus:!border-0 focus:!outline-4" />
          </div>
          <Button
            className="hover:text-gray focus:!border-seafoam-green focus:!outline-seafoam-green h-[24px] w-[24px] !border-0 p-0 text-white focus:!outline-4"
            variant="outlined"
            onClick={() => setOpen(!open)}
          >
            <Icon
              id="closeIcon"
              className="h-[24px] w-[24px]"
              onClick={() => {
                setOpen(!open)
              }}
            />
          </Button>
        </div>
        <div className="z-100000 flex h-full w-full flex-col p-5">
          <div className="border-t-seafoam-green flex w-full flex-col gap-3 border-t py-5">
            {initialButtons.map((button) => (
              <Button
                key={button.id}
                className="hover:text-gray focus:!border-seafoam-green focus:!outline-seafoam-green px-2 text-white focus:!outline-4"
                size="sm"
                variant="text"
                onClick={() => {
                  navigate(button.href)
                  setOpen(!open)
                }}
              >
                {t(button.title)}
              </Button>
            ))}
          </div>

          <AuthButtons onClick={() => setOpen(!open)} />
        </div>
      </Drawer>
    </div>
  )
}

export default MobileMenu
