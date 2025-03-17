import Link from '../../atoms/link'
import Chip from '../../atoms/chip'
import Icon from '../../atoms/icon'
import { useTranslation } from 'react-i18next'
import H3 from '../../atoms/typography/h3'
import { cn } from '../../../helpers/ui.ts'
import { setCurrentEstate, setFavorite } from '../../../store/estateSlice'
import { useAppDispatch } from '../../../store'
import { RealEstate } from '../../../store/commonMock.ts'

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
    image,
    label,
    isTop,
    favorite,
    selectedOnMap,
    type,
    address,
    rooms,
    bathrooms,
    operation,
    size,
    price,
    views,
  } = realEstate

  return (
    <Link
      href={`/${operation.key}/details`}
      className={cn(
        'group z-0 flex min-h-[26.75rem] max-w-[22.5rem] min-w-[300px] flex-col gap-0 hover:border-0 focus:border-0',
        { 'border-charcoal rounded-lg border-2 hover:border-2': selectedOnMap },
        className
      )}
      onClick={() => {
        dispatch(setCurrentEstate(id))
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
      disabled={disabled}
    >
      <div className="relative">
        <div className="absolute top-0 flex w-full min-w-[300px] justify-between p-6">
          {isTop && <Chip value="Top" />}
          <Icon
            id={favorite ? 'filledSmallHeartIcon' : 'smallHeartIcon'}
            className={cn(
              'z-100 ml-auto h-[20px] w-[20px] text-white lg:h-5 lg:w-5',
              { 'text-coral': favorite }
            )}
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              dispatch(setFavorite({ id }))
            }}
          />
        </div>
        <img
          src={image}
          alt="house"
          className="h-[15rem] min-w-[300px] rounded-lg object-cover"
        />
      </div>
      <div className="bg-light-gray2 group-hover:bg-gray transition-hover flex min-h-[11.75rem] w-full flex-col gap-3 rounded-b-lg px-6 py-5 duration-300">
        <label className="house-card__label font-700 text-charcoal">
          {label}
        </label>
        <div className="flex flex-col gap-1.5">
          <p className="r-estate-descriptions">
            <span>ID: {id}</span>
            <span>{t(type.value)}</span>
            <span>{address.location}</span>
          </p>
          <p className="r-estate-descriptions">
            <span>
              {rooms} {t('real-estate.rooms')}
            </span>
            <span>
              {bathrooms.total} {t('real-estate.bathroom')}
            </span>
            <span>{size.livingAreaM2}</span>
            <span>{t(operation.value)}</span>
          </p>
        </div>
        <div className="flex w-full justify-between">
          <H3 text={price} className="text-charcoal" />
          <span className="text-blue-gray flex items-center gap-1.5 self-end">
            {views}
            <Icon id="eyeIcon" className="h-[24px] w-[24px] lg:h-6 lg:w-6" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default EstateCard
