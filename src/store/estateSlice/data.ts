import house1 from '/house1.png?url'
import house2 from '/house2.png?url'
import house3 from '/house3.png?url'
import house4 from '/house4.png?url'
import house5 from '/house5.png?url'
import house6 from '/house6.png?url'
import house7 from '/apt1.png?url'
import house8 from '/apt2.png?url'
import house9 from '/apt3.png?url'
import house10 from '/apt4.png?url'
import house11 from '/apt5.png?url'
import house12 from '/apt6.png?url'
import house15 from '/apt9.png?url'

import { RealEstate } from './index.ts'

export const houses: RealEstate[] = [
  {
    id: '10025',
    image: house1,
    label: 'EXKLUSIVE WOHNPROJEKTE IM ZENTRUM WIENS',
    isTop: true,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: 'apartment',
      value: 'real-estate.type.apartment',
    },
    address: {
      location: '3400 Klosterneuburg',
      coordinates: [48.3, 16.3167],
    },
    rooms: 6,
    bathrooms: {
      total: 3,
      description: '2 Bad | 1 WC',
    },
    operation: {
      key: 'buy',
      value: 'real-estate.operations.buy',
    },
    size: {
      livingAreaM2: '215.96 m²',
      landAreaM2: '350 m²',
    },
    price: '6.500.000,00 €',
    views: 152,
    details: {
      yearBuilt: 2006,
      floors: 3,
      garage: true,
      heating: 'Gas Zentralheizung | HWB: 63,4 C | fGEE: 1C',
      condition: 'Gepflegt',
      commissionFree: true,
    },
  },
  {
    id: '10506',
    image: house3,
    label: 'ERSTKLASSIGE WOHNUNGEN IN WIENER TOP-LAGE',
    isTop: true,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: 'apartment',
      value: 'real-estate.type.apartment',
    },
    address: {
      location: '1070 Mariahilfer Straße',
      coordinates: [48.199, 16.349],
    },
    rooms: 4,
    bathrooms: {
      total: 2,
      description: '1 Bad | 1 WC',
    },
    operation: {
      key: 'buy',
      value: 'real-estate.operations.buy',
    },
    size: {
      livingAreaM2: '142.26 m²',
      landAreaM2: '',
    },
    price: '1.235.000,00 €',
    views: 139,
    details: {
      yearBuilt: 2015,
      floors: 1,
      garage: false,
      heating: 'Zentralheizung',
      condition: 'Neu',
      commissionFree: false,
    },
  },
  {
    id: '10125',
    image: house2,
    label: 'MODERNE APARTMENTS MIT PANORAMABLICK',
    isTop: true,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: 'apartment',
      value: 'real-estate.type.apartment',
    },
    address: {
      location: '1170 Hernalser Hauptstraße',
      coordinates: [48.2333, 16.2667],
    },
    rooms: 3,
    bathrooms: {
      total: 1,
      description: '1 Bad | 1 WC',
    },
    operation: {
      key: 'buy',
      value: 'real-estate.operations.buy',
    },
    size: {
      livingAreaM2: '215.96 m²',
      landAreaM2: '',
    },
    price: '380.000,00 €',
    views: 98,
    details: {
      yearBuilt: 2010,
      floors: 1,
      garage: true,
      heating: 'Fernwärme',
      condition: 'Sehr gut',
      commissionFree: true,
    },
  },
  {
    id: '100251',
    image: house4,
    label: 'JAHRHUNDERTVILLA MIT AUSBAUPOTENZIAL IN KLOSTERNEUBURG',
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: 'house',
      value: 'real-estate.type.house',
    },
    address: {
      location: '3400 Klosterneuburg',
      coordinates: [48.3015, 16.3198],
    },
    rooms: 6,
    bathrooms: {
      total: 3,
      description: '2 Bad | 1 WC',
    },
    operation: {
      key: 'buy',
      value: 'real-estate.operations.buy',
    },
    size: {
      livingAreaM2: '215.96 m²',
      landAreaM2: '1200 m²',
    },
    price: '750.000,00 €',
    views: 171,
    details: {
      yearBuilt: 2001,
      floors: 2,
      garage: true,
      heating: 'Gas Zentralheizung',
      condition: 'Sanierungsbedürftig',
      commissionFree: false,
    },
  },
  {
    id: '100252',
    image: house7,
    label: 'DACHGESCHOSSWOHNUNG MIT BALKON NAHE COTTAGE VIERTEL',
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: 'apartment',
      value: 'real-estate.type.apartment',
    },
    address: {
      location: '1180 Wien',
      coordinates: [48.233, 16.318],
    },
    rooms: 4,
    bathrooms: {
      total: 1,
      description: '1 Bad | 0 WC',
    },
    operation: {
      key: 'buy',
      value: 'real-estate.operations.buy',
    },
    size: {
      livingAreaM2: '98.51 m²',
      landAreaM2: '',
    },
    price: '606.000,00 €',
    views: 152,
    details: {
      yearBuilt: 2007,
      floors: 1,
      garage: false,
      heating: 'Fernwärme',
      condition: 'Gepflegt',
      commissionFree: true,
    },
  },
  {
    id: '100253',
    image: house8,
    label: 'MODERNE DG-MAISONETTE MIT BALKON AM AUMANNPLATZ',
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: 'apartment',
      value: 'real-estate.type.apartment',
    },
    address: {
      location: '1180 Wien',
      coordinates: [48.2345, 16.32],
    },
    rooms: 2,
    bathrooms: {
      total: 1,
      description: '1 Bad | 1 WC',
    },
    operation: {
      key: 'buy',
      value: 'real-estate.operations.buy',
    },
    size: {
      livingAreaM2: '61.68 m²',
      landAreaM2: '',
    },
    price: '650.000,00 €',
    views: 152,
    details: {
      yearBuilt: 2010,
      floors: 2,
      garage: false,
      heating: 'Fußbodenheizung',
      condition: 'Neuwertig',
      commissionFree: false,
    },
  },
  {
    id: '100001',
    image: house9,
    label: 'MODERNE DACHGESCHOSSWOHNUNG NÄHE AKH WIEN UND KUTSCHKERMARKT',
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: 'apartment',
      value: 'real-estate.type.apartment',
    },
    address: {
      location: '1180 Wien',
      coordinates: [48.2355, 16.3155],
    },
    rooms: 4,
    bathrooms: {
      total: 1,
      description: '1 Bad | 1 WC',
    },
    operation: {
      key: 'buy',
      value: 'real-estate.operations.buy',
    },
    size: {
      livingAreaM2: ' 11.2 m²',
      landAreaM2: '',
    },
    price: '690.000,00 €',
    views: 53,
    details: {
      yearBuilt: 2005,
      floors: 1,
      garage: false,
      heating: 'Fernwärme',
      condition: 'Gepflegt',
      commissionFree: true,
    },
  },
  {
    id: '10004',
    image: house10,
    label: 'GARTEN-MAISONETTE MIT EIGENEM POOL IN DÖBLING',
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: 'apartment',
      value: 'real-estate.type.apartment',
    },
    address: {
      location: '1180 Wien',
      coordinates: [48.236, 16.3125],
    },
    rooms: 5,
    bathrooms: {
      total: 5,
      description: '3 Bad | 2 WC',
    },
    operation: {
      key: 'buy',
      value: 'real-estate.operations.buy',
    },
    size: {
      livingAreaM2: '200.00 m²',
      landAreaM2: '',
    },
    price: '2.300.000,00 €',
    views: 49,
    details: {
      yearBuilt: 2018,
      floors: 2,
      garage: true,
      heating: 'Wärmepumpe',
      condition: 'Neuwertig',
      commissionFree: true,
    },
  },
  {
    id: '10023',
    image: house5,
    label: 'EXQUISITE VILLA MIT WELLNESSBEREICH UND INDOOR-POOL',
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: 'house',
      value: 'real-estate.type.house',
    },
    address: {
      location: '3400 Klosterneuburg',
      coordinates: [48.3025, 16.3212],
    },
    rooms: 7,
    bathrooms: {
      total: 4,
      description: '2 Bad | 2 WC',
    },
    operation: {
      key: 'buy',
      value: 'real-estate.operations.buy',
    },
    size: {
      livingAreaM2: '460.07 m²',
      landAreaM2: '1500 m²',
    },
    price: '2.900.000,00 €',
    views: 37,
    details: {
      yearBuilt: 2005,
      floors: 3,
      garage: true,
      heating: 'Gas Zentralheizung',
      condition: 'Gepflegt',
      commissionFree: false,
    },
  },
  {
    id: '100255',
    image: house11,
    label: 'EXKLUSIVES PENTHOUSE MIT BLICK AUF DEN STEPHANSDOM',
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: 'house',
      value: 'real-estate.type.house',
    },
    address: {
      location: '3400 Klosterneuburg',
      coordinates: [48.3035, 16.324],
    },
    rooms: 6,
    bathrooms: {
      total: 3,
      description: '2 Bad | 1 WC',
    },
    operation: {
      key: 'rent',
      value: 'real-estate.operations.rent',
    },
    size: {
      livingAreaM2: '215.96 m²',
      landAreaM2: '',
    },
    price: '1.900,00 €',
    views: 152,
    details: {
      yearBuilt: 2010,
      floors: 2,
      garage: true,
      heating: 'Fußbodenheizung',
      condition: 'Neuwertig',
      commissionFree: false,
    },
    rentDetails: {
      additionalFeatures: 'Dachterrasse, Panoramablick, Fußbodenheizung',
      kitchen: 'Luxuriöse offene Küche',
      loungeArea: 'Großzügiger Wohnbereich mit Kamin',
      furnished: 'Voll möbliert',
      availability: 'Ab sofort',
      additionalInfo: 'Penthouse mit atemberaubendem Blick auf den Stephansdom',
    },
  },
  {
    id: '100256',
    image: house6,
    label: 'CHARMANTE ALTBAUWOHNUNG IM HERZEN WIENS',
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: 'apartment',
      value: 'real-estate.type.apartment',
    },
    address: {
      location: '1180 Wien',
      coordinates: [48.2375, 16.31],
    },
    rooms: 4,
    bathrooms: {
      total: 1,
      description: '1 Bad | 1 WC',
    },
    operation: {
      key: 'rent',
      value: 'real-estate.operations.rent',
    },
    size: {
      livingAreaM2: '98.51 m²',
      landAreaM2: '',
    },
    price: '1.400,00 €',
    views: 114,
    details: {
      yearBuilt: 2000,
      floors: 1,
      garage: false,
      heating: 'Gasetagenheizung',
      condition: 'Gepflegt',
      commissionFree: true,
    },
    rentDetails: {
      additionalFeatures: 'Hohe Decken, Stuck, Parkettboden',
      kitchen: 'Separate Küche mit Speisekammer',
      loungeArea: 'Helles Wohnzimmer mit Flügeltüren',
      furnished: 'Unmöbliert',
      availability: 'Nach Vereinbarung',
      additionalInfo:
        'Altbauwohnung mit historischem Flair und modernen Annehmlichkeiten',
    },
  },
  {
    id: '100257',
    image: house12,
    label: 'GROßZÜGIGES EINFAMILIENHAUS IN RUHIGER WOHNGEGEND',
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: 'apartment',
      value: 'real-estate.type.apartment',
    },
    address: {
      location: '1180 Wien',
      coordinates: [48.238, 16.308],
    },
    rooms: 2,
    bathrooms: {
      total: 1,
      description: '1 Bad | 1 WC',
    },
    operation: {
      key: 'rent',
      value: 'real-estate.operations.rent',
    },
    size: {
      livingAreaM2: '61.68 m²',
      landAreaM2: '',
    },
    price: '5.200,00 €',
    views: 89,
    details: {
      yearBuilt: 2008,
      floors: 1,
      garage: true,
      heating: 'Gas Zentralheizung',
      condition: 'Gepflegt',
      commissionFree: false,
    },
    rentDetails: {
      additionalFeatures: 'Großer Garten, Terrasse',
      kitchen: 'Separate Küche mit Speisekammer',
      loungeArea: 'Helles Wohnzimmer mit Gartenblick',
      furnished: 'Teilweise möbliert',
      availability: 'Nach Vereinbarung',
      additionalInfo:
        'Ruhige Wohnlage mit guter Anbindung an öffentliche Verkehrsmittel',
    },
  },
  {
    id: '100258',
    image: house15,
    label: 'LUXURIÖSE VILLA MIT PRIVATGARTEN UND POOL',
    isTop: false,
    favorite: false,
    selectedOnMap: false,
    type: {
      key: 'house',
      value: 'real-estate.type.house',
    },
    address: {
      location: '1180 Wien',
      coordinates: [48.2395, 16.3075],
    },
    rooms: 4,
    bathrooms: {
      total: 1,
      description: '1 Bad | 1 WC',
    },
    operation: {
      key: 'rent',
      value: 'real-estate.operations.rent',
    },
    size: {
      livingAreaM2: '111.2 m²',
      landAreaM2: '170 m²',
    },
    price: '2.600,00 €',
    views: 78,
    details: {
      yearBuilt: 2015,
      floors: 2,
      garage: "",
      heating: 'Fußbodenheizung',
      condition: 'Neuwertig',
      commissionFree: true,
    },
    rentDetails: {
      additionalFeatures: 'Privater Pool, Große Terrasse, Wintergarten',
      kitchen: 'Luxuriöse Wohnküche',
      loungeArea: 'Großzügiger Wohnbereich mit Kamin',
      furnished: 'Voll möbliert',
      availability: 'Sofort verfügbar',
      additionalInfo:
        'Exklusive Villa mit hochwertigen Materialien und großzügigem Außenbereich',
    },
  },
]
