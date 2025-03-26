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

  const correctDetailsRoute = path.includes(ADS_ROUTES.rentAds)
    ? ADS_ROUTES.rentDetails
    : ADS_ROUTES.sellDetails

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
          className={cn(
            'grid w-[22.5rem] min-w-[300px] grid-cols-[7fr_1fr_1fr] gap-1.5'
          )}
        >
          {rejectedButtons.map((button) => (
            <Button
              key={button.id}
              className={cn('!h-[40px] w-auto', {
                'bg-charcoal hover:bg-seafoam-green !w-[40px] px-0 text-white':
                  button.type !== 'default',
              })}
              onClick={onClickHandler(button.id)}
            >
              {button.type === 'default' ? (
                t(button.children)
              ) : (
                <Icon
                  id={button.children}
                  className="h-[24px] min-w-[24px]"
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
        className={cn(
          'grid w-[22.5rem] min-w-[300px] grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr] gap-1.5'
        )}
      >
        {actionButtons.map((button, index) => {
          if (button.type === 'default') {
            return (
              <Button
                className="!h-[40px] w-auto"
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
              className="bg-charcoal hover:bg-seafoam-green !h-[40px] !w-[40px] px-0 text-white last:!opacity-100"
              onClick={onClickHandler(button.id)}
            >
              <Icon
                id={button.children}
                className="h-[24px] min-w-[24px]"
                onClick={onClickHandler(button.id)}
              />
            </Button>
          )
        })}
      </div>
    )
  }, [status])
}
