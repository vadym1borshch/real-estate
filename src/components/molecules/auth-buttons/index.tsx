import Button from '../../atoms/button'
import { cn } from '../../../helpers/ui.ts'
import { usePathname } from '../../../helpers/hooks/usePathname.ts'
import { useTranslation } from 'react-i18next'
import { useNavigate } from '../../../helpers/hooks/useNavigate.ts'
import { authButtons } from './mock.ts'
import { useWindowDimensions } from '../../../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../../../helpers/common.ts'
import { ROUTES } from '../../../@constants/routes.ts'

interface Props {
  onClick?: () => void
  buttonClassName?: string
}

const AuthButtons = ({ onClick, buttonClassName }: Props) => {
  const { t } = useTranslation()
  const pathname = usePathname()
  const navigate = useNavigate()
  const { width } = useWindowDimensions()
  const isTablet = width <= BREAKPOINTS.md

  return (
    <div
      className={cn('flex w-full flex-col gap-1.5 md:gap-3', {
        'border-t-seafoam-green border-t pt-2.5': isTablet,
      })}
    >
      {authButtons.map((button) => (
        <Button
          key={button.id}
          iconId={button.icon}
          iconSide="left"
          size="sm"
          variant="outlined"
          selected={pathname === button.href}
          childrenClassName="justify-start gap-1.5 md:gap-2.5"
          className={cn(
            'hover:border-blue-gray hover:text-blue-gray focus:!border-seafoam-green focus:!outline-seafoam-green h-12 w-full justify-start border-white text-start text-white focus:!outline-4',
            {
              'bg-seafoam-green border-seafoam-green':
                !buttonClassName && pathname === button.href,
            },
            {
              'border-charcoal bg-charcoal hover:!bg-charcoal !text-white hover:!text-white':
                buttonClassName && pathname.includes(button.href),
            },
            buttonClassName
          )}
          onClick={() => {
            if (onClick) {
              onClick()
            }
            if (button.href == ROUTES.messages) {
              navigate(button.href + "/inboxes")
              return
            }
            navigate(button.href)
          }}
        >
          <span className="flex w-full justify-between">
            {t(button.title)}
            {button.href === '/my-account/messages' && (
              <span className="bg-coral h-6 w-6 rounded-full text-center text-white">
                1
              </span>
            )}
          </span>
        </Button>
      ))}
      <Button
        iconId="logoutIcon"
        iconSide="left"
        size="sm"
        variant="outlined"
        childrenClassName="justify-start gap-1.5 md:gap-2.5"
        className={cn(
          'hover:border-blue-gray hover:text-blue-gray focus:!border-seafoam-green focus:!outline-seafoam-green h-12 w-full justify-start border-white text-start text-white focus:!outline-4',
          buttonClassName
        )}
        onClick={() => {
          if (onClick) {
            onClick()
          }
        }}
      >
        {t('buttons.logout')}
      </Button>
    </div>
  )
}

export default AuthButtons
