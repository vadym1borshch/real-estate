import Link from '../../atoms/link'
import Chip from '../../atoms/chip'
import Icon from '../../atoms/icon'
import { useTranslation } from 'react-i18next'
import H3 from '../../atoms/typography/h3'
import { cn } from '../../../helpers/ui.ts'
import { RealEstate, setCurrentEstate } from '../../../store/estateSlice'
import { useAppDispatch } from '../../../store'
import { Loader } from '../../atoms/loader'
import { useSetFavoriteEstate } from '../../../helpers/hooks/useSetFavoriteEstate.ts'

interface Props {
  realEstate: RealEstate
  className?: string
  disabled?: boolean
}

const EstateCard = ({ realEstate, className, disabled }: Props) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const {
    id,
    images,
    label,
    isTop,
    isFavorite,
    typeValue,
    addressLocation,
    rooms,
    bathroomsTotal,
    operationValue,
    operationKey,
    livingAreaM2,
    price,
    views,
    favoredBy,
  } = realEstate

  const { loading, setFavoriteCallBack, favorite } = useSetFavoriteEstate({
    estateId: id,
    favoredByArr: favoredBy,
    isFavorite: isFavorite,
  })

  return (
    <Link
      href={`${operationKey}/details`}
      className={cn(
        'group z-0 flex min-h-[26.75rem] max-w-[22.5rem] min-w-[18.75rem] flex-col gap-0 hover:border-0 focus:border-0',
        className
      )}
      onClick={() => {
        dispatch(setCurrentEstate(realEstate))
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
      disabled={disabled}
      id={id}
    >
      <div className="relative w-full">
        <div className="absolute top-0 flex w-full min-w-[18.75rem] justify-between p-6">
          {isTop && <Chip value="Top" />}
          {loading ? (
            <Loader className="z-100 ml-auto w-fit" size={20} />
          ) : (
            <Icon
              id={favorite ? 'filledSmallHeartIcon' : 'smallHeartIcon'}
              className={cn('z-100 ml-auto h-5 w-5 text-white lg:h-5 lg:w-5', {
                'text-coral': favorite,
              })}
              onClick={async (e) => {
                e.stopPropagation()
                e.preventDefault()
                dispatch(setCurrentEstate(realEstate))
                setFavoriteCallBack()
              }}
            />
          )}
        </div>
        <img
          src={images[0].url}
          alt="house"
          className="max-h-[50vw] min-h-[15rem] w-full min-w-[18.75rem] rounded-t-lg object-cover md:h-[15rem]"
        />
      </div>
      <div className="bg-light-gray2 group-hover:bg-gray transition-hover flex min-h-[11.75rem] w-full flex-col gap-3 rounded-b-lg px-6 py-5 duration-300">
        <label className="house-card__label font-700 text-charcoal">
          {label}
        </label>
        <div className="flex flex-col gap-1.5">
          <p className="r-estate-descriptions">
            <span className="whitespace-nowrap">ID: {id}</span>
            <span>{t(typeValue)}</span>
            <span className="truncate">{addressLocation}</span>
          </p>
          <p className="r-estate-descriptions">
            <span>
              {rooms} {t('real-estate.rooms')}
            </span>
            <span>
              {bathroomsTotal} {t('real-estate.bathroom')}
            </span>
            <span>{livingAreaM2} m²</span>
            <span>{t(operationValue)}</span>
          </p>
        </div>
        <div className="flex w-full justify-between">
          <H3 text={price} className="text-charcoal" />
          <span className="text-blue-gray flex items-center gap-1.5 self-end">
            {views}
            <Icon id="eyeIcon" className="h-6 w-6" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default EstateCard
