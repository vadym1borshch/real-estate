import { Meta, StoryFn } from '@storybook/react'
import EstateCard from './index'
import { images } from '../../../app/pages/estates-list/estate-details/mock.ts'

const estate = {
  id: '100251',
  label: 'JAHRHUNDERTVILLA MIT AUSBAUPOTENZIAL IN KLOSTERNEUBURG',
  isTop: false,
  isFavorite: false,
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
  createdAt: new Date(),
  updatedAt: new Date(),
  country: null,
  state: null,
  parkPlacePrice: null,
  balcony: null,
  terrace: null,
  garden: null,
  energyCertificate: null,
  HBW: null,
  HBWEnergyClass: null,
  fGEE: null,
  fGEEEnergyClass: null,
  cellar: false,
  netOperationCosts: null,
  brokerCommissions: null,
  brokerCommissionsPercentage: null,
  propertyDescriptions: null,
  locationDescriptions: null,
  street: null,
  number: null,
  visibleDetailedAddress: false,
  rentFormation: null,
  favoredBy: [],
}

export default {
  component: EstateCard,
} as Meta

const Template: StoryFn<typeof EstateCard> = (args) => {
  return <EstateCard {...args} />
}

export const Default = Template.bind({})
Default.args = {
  realEstate: {
    ...estate,
    operationKey: 'buy',
    images,
    status: 'active',
    premises: [],
    equipments: [],
    fees: [],
    monthlyCosts: [],
  },
}

export const favorite = Template.bind({})
favorite.args = {
  realEstate: {
    ...estate,
    isFavorite: true,
    images,
    status: 'active',
    operationKey: 'buy',
    premises: [],
    equipments: [],
    fees: [],
    monthlyCosts: [],
  },
}
