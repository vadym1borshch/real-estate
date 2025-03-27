export type EstateDetails = {
  id: string
  iconId: string
  key: string
  value: string | number | null
}

export const images = [
  {
    id: '1',
    src: '/public/house1.png?url',
  },
  {
    id: '2',
    src: '/public/house2.png?url',
  },
  {
    id: '3',
    src: '/public/house3.png?url',
  },
  {
    id: '4',
    src: '/public/house4.png?url',
  },
  {
    id: '5',
    src: '/public/house5.png?url',
  },
  {
    id: '6',
    src: '/public/house6.png?url',
  },
]

export const estateFullDetails: EstateDetails[] = [
  {
    id: '1',
    iconId: 'buildingsOfficeIcon',
    key: 'type.key',
    value: '',
  },
  {
    id: '2',
    iconId: 'calendarIcon',
    key: 'details.yearBuilt',
    value: '',
  },
  {
    id: '3',
    iconId: 'stairsIcon',
    key: 'details.floors',
    value: '',
  },
  {
    id: '4',
    iconId: 'homeM2Icon',
    key: 'size.livingAreaM2',
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
    key: 'bathrooms.description',
    value: '',
  },
  {
    id: '7',
    iconId: 'flowerIcon',
    key: 'size.landAreaM2',
    value: '',
  },
  {
    id: '8',
    iconId: 'parkingIcon',
    key: 'details.garage',
    value: '',
  },
  {
    id: '9',
    iconId: 'homeHeatingIcon',
    key: 'details.heating',
    value: '',
  },
  {
    id: '10',
    iconId: 'conditionHomeIcon',
    key: 'details.condition',
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
    key: 'details.commissionFree',
    value: '',
  },
  {
    id: '13',
    iconId: 'likeIcon',
    key: 'rentDetails.additionalFeatures',
    value: '',
  },
  {
    id: '14',
    iconId: 'kitchenIcon',
    key: 'rentDetails.kitchen',
    value: '',
  },
  {
    id: '15',
    iconId: 'coffeeCupIcon',
    key: 'rentDetails.loungeArea',
    value: '',
  },
  {
    id: '16',
    iconId: 'sofaIcon',
    key: 'rentDetails.furnished',
    value: '',
  },
  {
    id: '17',
    iconId: 'timeArrowIcon',
    key: 'rentDetails.availability',
    value: '',
  },
  {
    id: '18',
    iconId: 'euroCircleIcon',
    key: 'rentDetails.additionalInfo',
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
    descriptions:
      'real-estate.details.detail-info.equipments.windows-type',
  },
  {
    title: 'real-estate.details.detail-info.equipments.extra',
    descriptions:
      'real-estate.details.detail-info.equipments.extra-equip',
  },
]

export const fees = [
  { title: 'real-estate.details.detail-info.fees.transfer-tax', descriptions: '3,50%' },
  { title: 'real-estate.details.detail-info.fees.land-registry', descriptions: '1,10%' },
  {
    title: 'real-estate.details.detail-info.fees.purchase-agreement',
    descriptions: 'real-estate.details.detail-info.fees.purchase-agreement-descr',
  },
]

export const monthly_costs = [
  { title: 'real-estate.details.detail-info.monthly_costs.operating-costs', descriptions: '840,00 zzgl. UST 10%' },
  { title: 'real-estate.details.detail-info.monthly_costs.heating', descriptions: '454,60' },
]
