import buy from '/Buy.png?url'
import sell from '/sell.png?url'
import rent from '/rent.png?url'
import rentOut from '/rent-out.png?url'


export let assistant = {
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

