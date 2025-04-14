import { Meta, StoryFn } from '@storybook/react'
import EstateCard from './index'
import { images } from '../../../app/pages/estates-list/estate-details/mock.ts'

const estate = {
    id: 100251,
    label: 'JAHRHUNDERTVILLA MIT AUSBAUPOTENZIAL IN KLOSTERNEUBURG',
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    typeKey: 'house',
    typeValue: 'real-estate.type.house',
    addressLocation: '3400 Klosterneuburg',
    addressLat: 48.3015,
    addressLng: 16.3198,
    rooms: 6,
    bathroomsTotal: 3,
    bathroomsDesc: '2 Bad | 1 WC',
    operationKey: 'buy',
    operationValue: 'real-estate.operations.buy',
    livingAreaM2: '215.96 m²',
    landAreaM2: '1200 m²',
    price: '750.000,00 €',
    views: 171,
    yearBuilt: 2001,
    floors: '- | 2 Etagen',
    garage: 'Garage',
    heating: 'Gas Zentralheizung',
    condition: 'Sanierungsbedürftig',
    commissionFree: 'provisionspflichtig',
    additionalFeatures: null,
    kitchen: null,
    loungeArea: null,
    furnished: null,
    availability: null,
    additionalInfo: null,
    ownerId: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

export default {
  component: EstateCard,
} as Meta

const Template: StoryFn<typeof EstateCard> = (args) => {
  return (
    <EstateCard {...args} />
  )
}

export const Default = Template.bind({})
Default.args = {
  realEstate: {
    ...estate,
    id: "1",
    favoredBy: [],
    images
  },
}

export const favorite = Template.bind({})
favorite.args = {
  realEstate: {
    ...estate,
    id: '1',
    favorite: true,
    favoredBy: [],
    images
  },
}




