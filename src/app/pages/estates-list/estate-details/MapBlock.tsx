import H3 from '../../../../components/atoms/typography/h3'
import { TextExpander } from '../../../../components/molecules/text-expander'
import Link from '../../../../components/atoms/link'
import Map from '../../../../components/organisms/map'
import { Layer, MapRef, Source } from 'react-map-gl'
import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { usePathname } from '../../../../helpers/hooks/usePathname.ts'
import { RealEstate } from '../../../../store/estateSlice'

interface Props {
  estate: RealEstate
}

export const MapBlock = ({ estate }: Props) => {
  const { t } = useTranslation()
  const path = usePathname()
  const mapRef = useRef<MapRef | null>(null)

  const circleColor = path === '/buy/details' ? '#f87a53' : '#33443C'

  const geojsonData = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          city: estate.addressLocation,
          size: 30,
        },
        geometry: {
          type: 'Point',
          coordinates: [16.42125, 48.1936],
        },
      },
    ],
  }

  return (
    <div className="flex flex-col md:flex-row md:gap-10">
      <div className="flex flex-col gap-6 md:order-2">
        <H3
          text={t('real-estate.details.contact-provider.title')}
          className="md:max-w-[16.25rem]"
        />
        <TextExpander>
          {t('real-estate.details.contact-provider.p1')}
        </TextExpander>

        <TextExpander>
          {t('real-estate.details.contact-provider.p2')}
        </TextExpander>

        <Link href="/buy/details" iconId="playIcon" className="hidden md:flex">
          {t('real-estate.details.click-here-tour')}
        </Link>
      </div>

      <div className="mb-[6.25rem] flex min-w-[calc(50%-1.25rem)] flex-col gap-6 pt-6 md:order-1 md:pt-0 lg:mb-[9.375rem]">
        <Link href="/buy/details" iconId="playIcon" className="md:hidden">
          {t('real-estate.details.click-here-tour')}
        </Link>
        <Map loading={false} data={[1]} ref={mapRef}>
          <Source id="points" type="geojson" data={geojsonData as never}>
            <Layer
              id="circle-layer"
              type="circle"
              paint={{
                'circle-radius': ['get', 'size'],
                'circle-color': circleColor,
                'circle-opacity': 0.5,
              }}
            />
          </Source>
        </Map>
        <span className="text-blue-gray -mt-4.5 text-xs">
          {t('real-estate.details.address-not-published')}
        </span>
      </div>
    </div>
  )
}
