import { useAppSelector } from '../../../../store'
import { selectCurrentEstate } from '../../../../store/estateSlice/selectors.ts'
import H2 from '../../../../components/atoms/typography/h2'
import { useTranslation } from 'react-i18next'
import Caption from '../../../../components/atoms/typography/caption'
import Icon from '../../../../components/atoms/icon'
import { PriceBlock } from './PriceBlock.tsx'
import { ActionButtons } from './ActionButtons.tsx'
import { CommonInfoBlock } from './CommonInfoBlock.tsx'
import { useRef } from 'react'
import { realEstateAgents } from '../../ServiceAround/mock.ts'
import { ImagesBlock } from './ImagesBlock.tsx'
import { Tables } from './Tables.tsx'
import { MapBlock } from './MapBlock.tsx'
import { DetailedInfoBlock } from './DetailedInfoBlock.tsx'
import { ContactProviderBlock } from './ContactProviderBlock.tsx'
import { AllProviderObjects } from './AllProviderObjects.tsx'

const agent = realEstateAgents[0]

export const EstatesDetails = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const estate = useAppSelector(selectCurrentEstate)
  const { t } = useTranslation()

  if (!estate) {
    return null
  }

  return (
    <div className="flex max-w-[72.5rem] flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="lg:pb-12" ref={ref}>
          <H2 text={estate.label} />

          <CommonInfoBlock
            id={estate.id}
            type={t(estate.type.value)}
            address={estate.address.location}
            rooms={estate.rooms}
            bathrooms={estate.bathrooms.total}
            m2={estate.size.livingAreaM2}
          />

          <span className="bg-light-gray2 mt-3 flex w-fit items-center gap-1.5 rounded-sm px-3 py-[0.4375rem]">
            <span className="bg-dark-coral h-2 w-2 rounded-full" />
            <Caption text={t(estate.operation.value)} className="uppercase" />
          </span>

          <div className="flex flex-col pt-6 lg:flex-row lg:items-center lg:justify-between">
            <PriceBlock price={estate.price} />

            <div className="flex items-center justify-between pt-6 pb-9 lg:gap-3 lg:p-0">
              <span className="text-blue-gray">Aktualisiert: vor 5 Tagen</span>
              <span className="text-blue-gray flex items-center gap-1.5 self-end">
                {estate.views}
                <Icon
                  id="eyeIcon"
                  className="h-[24px] w-[24px] lg:h-6 lg:w-6"
                />
              </span>
            </div>
          </div>
        </div>
        <ActionButtons estateId={estate.id} isFavorite={estate.favorite} />
      </div>

      <ImagesBlock agent={agent} ref={ref} />

      <Tables estate={estate} />

      <MapBlock estate={estate} />

      <DetailedInfoBlock />

      <ContactProviderBlock agent={agent} />

      <AllProviderObjects/>
    </div>
  )
}
