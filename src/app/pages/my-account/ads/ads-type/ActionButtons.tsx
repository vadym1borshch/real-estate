import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { cn } from '../../../../../helpers/ui.ts'
import Button from '../../../../../components/atoms/button'
import Icon from '../../../../../components/atoms/icon'
import {
  AdsFilterStatus,
  deleteAd,
  refreshRejection,
} from '../../../../../store/adsSlice'
import { actionButtons, rejectedButtons } from './common.ts'
import { useAppDispatch } from '../../../../../store'
import { useNavigate } from '../../../../../helpers/hooks/useNavigate.ts'
import { usePathname } from '../../../../../helpers/hooks/usePathname.ts'
import { ADS_ROUTES } from '../../../../../@constants/routes.ts'
import { useWindowDimensions } from '../../../../../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../../../../../@constants'

interface Props {
  status: AdsFilterStatus
  adId: string
  callback: (modalId: string, adId?: string) => void
}

export const ActionButtons = ({ status, adId, callback }: Props) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const path = usePathname()
  const { width } = useWindowDimensions()
  const isLarge = width >= BREAKPOINTS.PRE_LG

  const correctDetailsRoute = path.includes(ADS_ROUTES.RENT_ADS)
    ? ADS_ROUTES.RENT_DETAILS
    : ADS_ROUTES.SELL_DETAILS

  const disabledButtons = (
    status: AdsFilterStatus,
    children: string,
    index: number
  ) => {
    if (status === 'inactive') {
      return index === 0 || index === 1
    }
    if (status === 'moderation' && children !== 'deleteIcon') {
      return true
    }
    return false
  }

  const onClickHandler = (id: string) => {
    switch (id) {
      case 'delete':
        return () => dispatch(deleteAd({ id: adId }))

      case 'refresh':
        return () => dispatch(refreshRejection({ id: adId }))
      case 'top':
        return () => callback(id, adId)
      case 'rejected-reason':
        return () => callback(id)
      case 'edit':
        return () => navigate(correctDetailsRoute)
    }
  }

  return useMemo(() => {
    if (status === 'rejected') {
      return (
        <div
          className={cn('flex w-full min-w-[18.75rem] gap-1.5', {
            'grid max-w-[22.5rem] grid-cols-[7fr_1fr_1fr]': isLarge,
          })}
        >
          {rejectedButtons.map((button) => (
            <Button
              key={button.id}
              className={cn(
                'h-10 w-full max-w-full truncate',
                {
                  'bg-charcoal hover:bg-seafoam-green !max-w-10 !min-w-10 px-0 text-white':
                    button.type !== 'default',
                }
              )}
              onClick={onClickHandler(button.id)}
            >
              {button.type === 'default' ? (
                t(button.children)
              ) : (
                <Icon
                  id={button.children}
                  className="h-6 w-6"
                  onClick={onClickHandler(button.id)}
                />
              )}
            </Button>
          ))}
        </div>
      )
    }
    return (
      <div
        className={cn('flex w-full min-w-[18.75rem] gap-1.5', {
          'grid max-w-[22.5rem] grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr]': isLarge,
        })}
      >
        {actionButtons.map((button, index) => {
          if (button.type === 'default') {
            return (
              <Button
                className="!h-10 w-full px-0"
                key={button.id}
                disabled={status === 'moderation' || status === 'inactive'}
                onClick={onClickHandler(button.id)}
              >
                {t(button.children)}
              </Button>
            )
          }
          return (
            <Button
              key={button.id}
              disabled={disabledButtons(status, button.children, index)}
              className="bg-charcoal hover:bg-seafoam-green !h-10 !min-w-10 px-0 text-white last:!opacity-100"
              onClick={onClickHandler(button.id)}
            >
              <Icon
                id={button.children}
                className="h-6 w-6"
                onClick={onClickHandler(button.id)}
              />
            </Button>
          )
        })}
      </div>
    )
  }, [status])
}
