import Button from '../../../../components/atoms/button'
import { RealEstate } from '../../../../store/estateSlice'
import { useTranslation } from 'react-i18next'
import { cn } from '../../../../helpers/ui.ts'
import { useSetFavoriteEstate } from '../../../../helpers/hooks/useSetFavoriteEstate.ts'
import { Loader } from '../../../../components/atoms/loader'

interface Props {
  estate: RealEstate
}

export const ActionButtons = ({ estate }: Props) => {
  const { loading, setFavoriteCallBack, favorite } = useSetFavoriteEstate({
    estateId: estate.id,
    favoredByArr: estate.favoredBy,
    isFavorite: estate.favorite,
  })
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
        className="text-blue-gray hover:text-charcoal w-auto !border-0"
        iconId={favorite ? 'bigHeartFilledIcon' : 'bigHeartIcon'}
        iconSide="left"
        iconClassName={cn('!min-h-[48px] !min-w-[48px] ', {
          'text-coral': favorite,
        })}
        onClick={() => {
          setFavoriteCallBack()
        }}
        disabled={loading}
      >
        {loading ? <Loader size={30} className="mx-5"/> : t('buttons.like')}
      </Button>
    </div>
  )
}
