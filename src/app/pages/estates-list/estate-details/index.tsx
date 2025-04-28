import { useAppSelector } from '../../../../store'
import { selectCurrentEstate } from '../../../../store/estateSlice/selectors.ts'
import H2 from '../../../../components/atoms/typography/h2'
import { useTranslation } from 'react-i18next'
import Caption from '../../../../components/atoms/typography/caption'
import Icon from '../../../../components/atoms/icon'
import { PriceBlock } from './PriceBlock.tsx'
import { ActionButtons } from './ActionButtons.tsx'
import { CommonInfoBlock } from './CommonInfoBlock.tsx'
import { useEffect, useRef } from 'react'
import { realEstateAgents } from '../../service-around/mock.ts'
import { ImagesBlock } from './ImagesBlock.tsx'
import { Tables } from './Tables.tsx'
import { MapBlock } from './MapBlock.tsx'
import { DetailedInfoBlock } from './DetailedInfoBlock.tsx'
import { ContactProviderBlock } from './ContactProviderBlock.tsx'
import { AllProviderObjects } from './AllProviderObjects.tsx'
import { useDayTransformation } from '../../../../helpers/hooks/useDayTransformation.ts'
import { useNavigate } from '../../../../helpers/hooks/useNavigate.ts'

const agent = realEstateAgents[0]

export const EstatesDetails = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const estate = useAppSelector(selectCurrentEstate)
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()

  const updated = useDayTransformation({
    numberValue: 5,
    extraText:
      i18n.language === 'en' ? 'ago' : i18n.language === 'de' ? 'vor' : 'днів',
    pluralText:
      i18n.language === 'en'
        ? 'days'
        : i18n.language === 'de'
          ? 'tagen'
          : 'дні',
    singularText:
      i18n.language === 'en' ? 'day' : i18n.language === 'de' ? 'tag' : 'день',
  })

  useEffect(() => {
    if (!estate) {
      navigate('')
    }
  }, [estate])

  if (!estate) {
    return null
  }

  return (
    <div className="flex max-w-[72.5rem] flex-col">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">
        <div className="lg:pb-12" ref={ref}>
          <H2 text={estate.label} />

          <CommonInfoBlock
            id={estate.id}
            type={t(estate.typeValue)}
            address={estate.addressLocation}
            rooms={estate.rooms}
            bathrooms={estate.bathroomsTotal}
            m2={estate.livingAreaM2}
          />

          <span className="bg-light-gray2 mt-3 flex w-fit items-center gap-1.5 rounded-sm px-3 py-[0.4375rem]">
            <span className="bg-dark-coral h-2 w-2 rounded-full" />
            <Caption text={t(estate.operationValue)} className="uppercase" />
          </span>

          <div className="flex flex-col pt-6 lg:flex-row lg:items-center lg:justify-between">
            <PriceBlock price={estate.price} />

            <div className="flex items-center justify-between pt-6 pb-9 lg:gap-3 lg:p-0">
              <span className="text-blue-gray">
                {t('real-estate.details.updated')} {updated}
              </span>
              <span className="text-blue-gray flex items-center gap-1.5 self-end">
                {estate.views}
                <Icon id="eyeIcon" className="h-6 w-6" />
              </span>
            </div>
          </div>
        </div>
        <ActionButtons estate={estate} />
      </div>

      <ImagesBlock agent={agent} ref={ref} images={estate.images} />

      <Tables estate={estate} />

      <MapBlock estate={estate} />

      <DetailedInfoBlock />

      <ContactProviderBlock agent={agent} />

      <AllProviderObjects />
    </div>
  )
}
