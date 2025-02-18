import buy from '/Buy.png?url'
import sell from '/sell.png?url'
import rent from '/rent.png?url'
import rentOut from '/rent-out.png?url'
import house from '/house1.png?url'

export const assistant = {
  name: 'Johanna',
  lastName: 'Schneider',
  profession: 'Steuerberatung für Immobilien',
  info: 'Seit 18 Jahren in der Steuerberatung tätig und spezialisiert auf steuerliche Fragen rund um Immobilien',
  image: 'https://i.pravatar.cc/150?img=10',
  email: 'j.schneider@steuerberatung.at',
  tel: '+43 295 730 846',
}

export const services = [
  {
    id: '1',
    src: buy,
    label: 'services.buy.title',
    descriptions: 'services.buy.descriptions',
  },
  {
    id: '2',
    src: sell,
    label: 'services.sell.title',
    descriptions: 'services.buy.descriptions',
  },
  {
    id: '3',
    src: rent,
    label: 'services.rent.title',
    descriptions: 'services.buy.descriptions',
  },
  {
    id: '4',
    src: rentOut,
    label: 'services.rent-out.title',
    descriptions: 'services.buy.descriptions',
  },

]

export type RealEstate = {
  id: string,
  label: string,
  isTop: true,
  type: string,
  address: string,
  rooms: number,
  bathroom: number,
  operation: string,
  m2: string,
  price: string,
  views: number,
  image: string,
  favorite: boolean,
  selectedOnMap: boolean,
}

export const houses: RealEstate[] = [
  {
    id: '10025',
    image: house,
    label: 'EXKLUSIVE WOHNPROJEKTE IM ZENTRUM WIENS',
    isTop: true,
    favorite: false,
    selectedOnMap: false,
    type: 'real-estate.type.apartment',
    address: '3400 Klosterneuburg',
    rooms: 6,
    bathroom: 3,
    operation: 'real-estate.operations.buy',
    m2: '215.96 m²',
    price: '650.000,00 €',
    views: 152,
  },
]