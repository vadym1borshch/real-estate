export type EstateDetails = {
  id: string
  iconId: string
  key: string
  value: string | number | null
}

export const images = [
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
