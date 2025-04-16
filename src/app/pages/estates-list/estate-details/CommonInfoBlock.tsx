import { useTranslation } from 'react-i18next'

interface Props {
  id: string
  type: string
  address: string
  rooms: number
  bathrooms: number | null
  m2: string
}

export const CommonInfoBlock = ({
  id,
  type,
  address,
  rooms,
  bathrooms,
  m2,
}: Props) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-1.5 pt-6">
      <p className="r-estate-descriptions">
        <span>ID: {id}</span>
        <span>{t(type)}</span>
        <span>{address}</span>
      </p>
      <p className="r-estate-descriptions">
        <span>
          {rooms} {t('real-estate.rooms')}
        </span>
        <span>
          {bathrooms} {t('real-estate.bathroom')}
        </span>
        <span>{m2}</span>
      </p>
    </div>
  )
}
