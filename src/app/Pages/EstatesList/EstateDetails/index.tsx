import { useAppSelector } from '../../../../store'
import { selectCurrentEstate } from '../../../../store/estateSlice/selectors.ts'
import ImagePreview from '../../../../components/molecules/image-preview'
import H2 from '../../../../components/atoms/typography/h2'
import { useTranslation } from 'react-i18next'
import Caption from '../../../../components/atoms/typography/caption'
import Icon from '../../../../components/atoms/icon'
import { PriceBlock } from './PriceBlock.tsx'
import { ActionButtons } from './ActionButtons.tsx'
import { CommonInfoBlock } from './CommonInfoBlock.tsx'
import { useElementSizes } from '../../../../helpers/hooks/useElementsSizes.ts'
import { useRef } from 'react'
import Avatar from '../../../../components/atoms/avatar'
import { realEstateAgents } from '../../ServiceAround/mock.ts'
import Button from '../../../../components/atoms/button'
import Table from '../../../../components/molecules/table'

const images = [
  {
    id: '1',
    src: '../../../../../public/house1.png?url',
  },
  {
    id: '2',
    src: '../../../../../public/house2.png?url',
  },
  {
    id: '3',
    src: '../../../../../public/house3.png?url',
  },
  {
    id: '4',
    src: '../../../../../public/house4.png?url',
  },
  {
    id: '5',
    src: '../../../../../public/house5.png?url',
  },
  {
    id: '6',
    src: '../../../../../public/house6.png?url',
  },
]

const estateFullDetails = [
  {
    id: '1',
    iconId: 'houseicon',
    key: "type.key",
    value: ""
  },
  {
    id: '2',
    iconId: 'calendar',
    key: "details.yearBuilt",
    value: ""
  },
  {
    id: '3',
    iconId: 'floors',
    key: "details.floors",
    value: ""
  },
  {
    id: '4',
    iconId: 'livingAreaM2',
    key: "size.livingAreaM2",
    value: ""
  },
  {
    id: '5',
    iconId: 'bed',
    key: "rooms",
    value: ""
  },
  {
    id: '6',
    iconId: 'bed',
    key: "rooms",
    value: ""
  },
  {
    id: '6',
    iconId: 'toilets',
    key: "bathrooms.description",
    value: ""
  },
  {
    id: '7',
    iconId: 'area-flover',
    key: "size.landAreaM2",
    value: ""
  },
  {
    id: '7',
    iconId: 'garage',
    key: "details.garage",
    value: ""
  },
]

const agent = realEstateAgents[0]

export const EstatesDetails = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const estate = useAppSelector(selectCurrentEstate)
  const { t } = useTranslation()
  const { containerDimension } = useElementSizes({
    containerRef: ref,
    containerDimensionProp: 'width',
  })
  if (!estate) {
    return null
  }

  return (
    <div className="flex flex-col">
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
        <ActionButtons />
      </div>
      <div className="flex flex-col items-center">
        <ImagePreview images={images} withButtons width={containerDimension} />
        <div className="border-blue-gray flex min-w-[300px] flex-col items-center rounded-lg border p-3 pt-7.5 md:min-w-[22.5rem]">
          <Avatar userName={agent.name} size={10} src={agent.photo} />
          <div className="flex w-full flex-col items-center pt-6">
            <span className="text-[1.125rem]">{agent.name}</span>
            <span className="text-blue-gray pt-1 text-base">
              {agent.agency.name}
            </span>
          </div>

          <div className="flex w-full flex-col items-center py-9">
            <p className="font-500 text-xl">{agent.phone}</p>
            <p className="flex items-center pt-1.5">
              <Icon id="checkBadgeBlueIcon" className="h-[24px] w-[24px]" />
              <Caption text={t(agent.verified.title)} />
            </p>
          </div>

          <div className="flex w-full flex-col gap-3">
            <Button className="bg-charcoal hover:bg-seafoam-green focus:border-blue-gray w-full focus:outline-none">
              Alle Objekte des Anbieters
            </Button>
            <Button className="bg-charcoal hover:bg-seafoam-green focus:border-blue-gray w-full focus:outline-none">
              Grundbuchabfrage
            </Button>
            <Button className="w-full">Anbieter kontaktieren</Button>
          </div>
        </div>
      </div>

      <Table
        className="my-[100px]"
        tableRows={[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_row, index) => {
          return (
            <tr
              id={'index' + index}
              className="border-blue-gray border-b last-of-type:border-0"
            >
              <td className="w-[24px] py-3 pl-6">
                <span>icon</span>
              </td>
              <td className="py-3 pl-3">
                <span>value</span>
              </td>
            </tr>
          )
        })}
      />
    </div>
  )
}
