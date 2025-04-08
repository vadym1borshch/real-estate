import Button from '../../../../components/atoms/button'
import { changeCurrentEstate, setFavorite } from '../../../../store/estateSlice'
import { useAppDispatch } from '../../../../store'
import { useTranslation } from 'react-i18next'
import { cn } from '../../../../helpers/ui.ts'

interface Props {
  estateId: string
  isFavorite: boolean
}

export const ActionButtons = ({ estateId, isFavorite }: Props) => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()
  return (
    <div className="hidden justify-end gap-3 lg:flex">
      <Button
        variant="text"
        className="text-blue-gray hover:text-charcoal w-auto !border-0"
        iconId="bigShareIcon"
        iconSide="left"
        iconClassName="!min-h-[48px] !min-w-[48px]"
      >
        {t('buttons.share')}
      </Button>
      <Button
        variant="text"
        className="text-blue-gray hover:text-charcoal  w-auto !border-0"
        iconId={isFavorite ? 'bigHeartFilledIcon' : 'bigHeartIcon'}
        iconSide="left"
        iconClassName={cn('!min-h-[48px] !min-w-[48px] ', {
          'text-coral': isFavorite,
        })}
        onClick={() => {
          dispatch(setFavorite({ id: estateId }))
          dispatch(changeCurrentEstate({ favorite: !isFavorite }))
        }}
      >
        {t('buttons.like')}
      </Button>
    </div>
  )
}
