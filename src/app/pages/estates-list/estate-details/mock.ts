import { v4 } from 'uuid'

export type EstateDetails = {
  id: string
  iconId: string
  key: string
  value: string | number | null
}

export const images = [
  {
    createdAt: new Date().toISOString(),
    estateId: '1',
    id: v4(),
    url: 'https://images.pexels.com/photos/314937/pexels-photo-314937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
]

export const estateFullDetails: EstateDetails[] = [
  {
    id: '1',
    iconId: 'buildingsOfficeIcon',
    key: 'typeKey',
    value: '',
  },
  {
    id: '2',
    iconId: 'calendarIcon',
    key: 'yearBuilt',
    value: '',
  },
  {
    id: '3',
    iconId: 'stairsIcon',
    key: 'floors',
    value: '',
  },
  {
    id: '4',
    iconId: 'homeM2Icon',
    key: 'livingAreaM2',
    value: '',
  },
  {
    id: '5',
    iconId: 'doubleBedIcon',
    key: 'rooms',
    value: '',
  },
  {
    id: '6',
    iconId: 'toiletIcon',
    key: 'bathroomsDesc',
    value: '',
  },
  {
    id: '7',
    iconId: 'flowerIcon',
    key: 'landAreaM2',
    value: '',
  },
  {
    id: '8',
    iconId: 'parkingIcon',
    key: 'garage',
    value: '',
  },
  {
    id: '9',
    iconId: 'homeHeatingIcon',
    key: 'heating',
    value: '',
  },
  {
    id: '10',
    iconId: 'conditionHomeIcon',
    key: 'state',
    value: '',
  },
  {
    id: '11',
    iconId: 'moneyPaperIcon',
    key: 'price',
    value: '',
  },
  {
    id: '12',
    iconId: 'discountIcon',
    key: 'commissionFree',
    value: '',
  },
  {
    id: '13',
    iconId: 'likeIcon',
    key: 'additionalFeatures',
    value: '',
  },
  {
    id: '14',
    iconId: 'kitchenIcon',
    key: 'kitchen',
    value: '',
  },
  {
    id: '15',
    iconId: 'coffeeCupIcon',
    key: 'loungeArea',
    value: '',
  },
  {
    id: '16',
    iconId: 'sofaIcon',
    key: 'furnished',
    value: '',
  },
  {
    id: '17',
    iconId: 'timeArrowIcon',
    key: 'availability',
    value: '',
  },
  {
    id: '18',
    iconId: 'euroCircleIcon',
    key: 'additionalInfo',
    value: '',
  },
]

export const premises = [
  {
    title: 'real-estate.details.detail-info.premises.living-space',
    descriptions:
      'real-estate.details.detail-info.premises.bedroom-with-wardrobe',
    value: '46,17',
  },
  {
    title: 'real-estate.details.detail-info.premises.bathroom',
    descriptions: 'real-estate.details.detail-info.premises.ground-floor',
    value: '7,55',
  },
  {
    title: 'real-estate.details.detail-info.premises.wc',
    descriptions: 'real-estate.details.detail-info.premises.ground-floor',
    value: '2,05',
  },
  {
    title: 'real-estate.details.detail-info.premises.adjoining-room',
    descriptions: 'real-estate.details.detail-info.premises.gallery',
    value: '19,68',
  },
  {
    title: 'real-estate.details.detail-info.premises.living-space',
    descriptions: 'real-estate.details.detail-info.premises.bedroom1',
    value: '11,22',
  },
  {
    title: 'real-estate.details.detail-info.premises.living-space',
    descriptions: 'real-estate.details.detail-info.premises.bedroom2',
    value: '36,80',
  },
  {
    title: 'real-estate.details.detail-info.premises.living-space',
    descriptions: 'real-estate.details.detail-info.premises.bedroom3',
    value: '12,40',
  },
  {
    title: 'real-estate.details.detail-info.premises.living-space',
    descriptions: 'real-estate.details.detail-info.premises.bedroom4',
    value: '14,67',
  },
  {
    title: 'real-estate.details.detail-info.premises.bathroom',
    descriptions: '1 Stock',
    value: '4,50',
  },
  {
    title: 'real-estate.details.detail-info.premises.wc',
    descriptions: '1 Stock',
    value: '2,05',
  },
  {
    title: 'real-estate.details.detail-info.premises.living-space',
    descriptions: 'real-estate.details.detail-info.premises.guest-room',
    value: '25,60',
  },
  {
    title: 'real-estate.details.detail-info.premises.bathroom',
    descriptions: 'real-estate.details.detail-info.premises.guest-room',
    value: '5,10',
  },
  {
    title: 'real-estate.details.detail-info.premises.wc',
    descriptions: 'real-estate.details.detail-info.premises.wellness-area',
    value: '2,00',
  },
  {
    title: 'real-estate.details.detail-info.premises.adjoining-room',
    descriptions:
      'real-estate.details.detail-info.premises.wellness-room-living-area',
    value: '38,70',
  },
  {
    title: 'real-estate.details.detail-info.premises.adjoining-room',
    descriptions: 'real-estate.details.detail-info.premises.fitness-pool',
    value: '156,90',
  },
  {
    title: 'real-estate.details.detail-info.premises.adjoining-room',
    descriptions: 'real-estate.details.detail-info.premises.wine-cellar',
    value: '9,60',
  },
  {
    title: 'real-estate.details.detail-info.premises.adjoining-room',
    descriptions: 'real-estate.details.detail-info.premises.technical-room',
    value: '44,40',
  },
  {
    title: 'real-estate.details.detail-info.premises.outdoor-area',
    descriptions: 'real-estate.details.detail-info.premises.garage',
    value: '50,80',
  },
  {
    title: 'real-estate.details.detail-info.premises.outdoor-area',
    descriptions: 'real-estate.details.detail-info.premises.garden',
    value: '1.396,00',
  },
]

export const equipments = [
  {
    title: 'real-estate.details.detail-info.equipments.outlook',
    descriptions: 'real-estate.details.detail-info.equipments.view',
  },
  {
    title: 'real-estate.details.detail-info.equipments.kitchen',
    descriptions: 'real-estate.details.detail-info.equipments.kitchen-type',
  },
  {
    title: 'real-estate.details.detail-info.equipments.floor',
    descriptions: 'real-estate.details.detail-info.equipments.floor-type',
  },
  {
    title: 'real-estate.details.detail-info.equipments.windows',
    descriptions: 'real-estate.details.detail-info.equipments.windows-type',
  },
  {
    title: 'real-estate.details.detail-info.equipments.extra',
    descriptions: 'real-estate.details.detail-info.equipments.extra-equip',
  },
]

export const fees = [
  {
    title: 'real-estate.details.detail-info.fees.transfer-tax',
    descriptions: '3,50%',
  },
  {
    title: 'real-estate.details.detail-info.fees.land-registry',
    descriptions: '1,10%',
  },
  {
    title: 'real-estate.details.detail-info.fees.purchase-agreement',
    descriptions:
      'real-estate.details.detail-info.fees.purchase-agreement-descr',
  },
]

export const monthly_costs = [
  {
    title: 'real-estate.details.detail-info.monthly_costs.operating-costs',
    descriptions: '840,00 zzgl. UST 10%',
  },
  {
    title: 'real-estate.details.detail-info.monthly_costs.heating',
    descriptions: '454,60',
  },
]
