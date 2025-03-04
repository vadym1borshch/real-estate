import Link from '../../atoms/link'
import Chip from '../../atoms/chip'
import Icon from '../../atoms/icon'
import { useTranslation } from 'react-i18next'
import H3 from '../../atoms/typography/h3'
import { cn } from '../../../helpers/ui.ts'
import { RealEstate, setCurrentEstate, setFavorite } from '../../../store/estateSlice'
import { useAppDispatch } from '../../../store'

interface Props {
  realEstate: RealEstate

}

const EstateCard = ({ realEstate }: Props) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const {
    label,
    isTop,
    address,
    bathroom,
    m2,
    operation,
    price,
    rooms,
    views,
    type,
    image,
    id,
    favorite,
    selectedOnMap,
  } = realEstate


  return (
    <Link
      href={`/${operation.key}/details`}
      className={cn('max-w-[22.5rem] min-h-[26.75rem] hover:border-0 focus:border-0 group flex flex-col gap-0 z-0',
        { 'border-2 border-charcoal hover:border-2 rounded-lg': selectedOnMap },
      )}
      onClick={()=>  dispatch(setCurrentEstate(id))}
    >
      <div
        className="relative"
      >
        <div
          className="absolute p-6 top-0 flex justify-between w-full"

        >
          {isTop && <Chip value="Top" />}
          <Icon
            id={favorite ? 'filledSmallHeartIcon' : 'smallHeartIcon'}
            className={cn('h-[20px] w-[20px] lg:h-5 lg:w-5 ml-auto text-white z-100 ',
              { 'text-coral': favorite },
            )}
            onClick={() => {
              dispatch(setFavorite({ id }))
            }}
          />
        </div>
        <img src={image} alt="house" className="object-cover h-[15rem]" />
      </div>
      <div
        className="min-h-[11.75rem] w-full bg-light-gray2 flex flex-col gap-3 px-6 py-5 rounded-b-lg group-hover:bg-gray transition-hover duration-300"
      >
        <label className="house-card__label font-700 text-charcoal">{label}</label>
        <div className="flex flex-col gap-1.5">
          <p className="r-estate-descriptions">
            <span>ID: {id}</span>
            <span>{t(type.value)}</span>
            <span>{address}</span>
          </p>
          <p className="r-estate-descriptions">
            <span>{rooms} {t('real-estate.rooms')}</span>
            <span>{bathroom} {t('real-estate.bathroom')}</span>
            <span>{m2}</span>
            <span>{t(operation.value)}</span>
          </p>
        </div>
        <div className="flex justify-between w-full">
          <H3 text={price} className="text-charcoal" />
          <span className="flex self-end text-blue-gray gap-1.5 items-center">
            {views}
            <Icon id="eyeIcon" className="h-[24px] w-[24px] lg:w-6 lg:h-6 " />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default EstateCard