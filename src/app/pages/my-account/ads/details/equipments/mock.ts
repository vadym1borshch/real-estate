import { v4 } from 'uuid'

export type Equipment = {
  id: string
  label: string
  checked: boolean
  key: string
}

export type Data = {
  id: string
  title: string
  data: Equipment[]
  key: string
}

const outlookData: Equipment[] = [
  {
    id: v4(),
    label: 'details.equipments.outlook.mountain',
    checked: false,
    key: 'mountain',
  },
  {
    id: v4(),
    label: 'details.equipments.outlook.lake',
    checked: false,
    key: 'lake',
  },
  {
    id: v4(),
    label: 'details.equipments.outlook.sea',
    checked: false,
    key: 'sea',
  },
  {
    id: v4(),
    label: 'details.equipments.outlook.green',
    checked: false,
    key: 'green',
  },
  {
    id: v4(),
    label: 'details.equipments.outlook.long-distance',
    checked: false,
    key: 'long-distance',
  },
  {
    id: v4(),
    label: 'details.equipments.outlook.city',
    checked: false,
    key: 'city',
  },
]

const freeSpaceData: Equipment[] = [
  {
    id: v4(),
    label: 'details.equipments.free-space.north',
    checked: false,
    key: 'north',
  },
  {
    id: v4(),
    label: 'details.equipments.free-space.eats',
    checked: false,
    key: 'eats',
  },
  {
    id: v4(),
    label: 'details.equipments.free-space.south',
    checked: false,
    key: 'south',
  },
  {
    id: v4(),
    label: 'details.equipments.free-space.west',
    checked: false,
    key: 'west',
  },
  {
    id: v4(),
    label: 'details.equipments.free-space.northeast',
    checked: false,
    key: 'northeast',
  },
  {
    id: v4(),
    label: 'details.equipments.free-space.southeast',
    checked: false,
    key: 'southeast',
  },
  {
    id: v4(),
    label: 'details.equipments.free-space.southwest',
    checked: false,
    key: 'southwest',
  },
  {
    id: v4(),
    label: 'details.equipments.free-space.northwest',
    checked: false,
    key: 'northwest',
  },
]

const kitchenData: Equipment[] = [
  {
    id: v4(),
    label: 'details.equipments.kitchen.fit-kitchen',
    checked: false,
    key: 'fit-kitchen',
  },
  {
    id: v4(),
    label: 'details.equipments.kitchen.compact-kitchen',
    checked: false,
    key: 'compact-kitchen',
  },
  {
    id: v4(),
    label: 'details.equipments.kitchen.tea-kitchen',
    checked: false,
    key: 'tea-kitchen',
  },
  {
    id: v4(),
    label: 'details.equipments.kitchen.eat-in-kitchen',
    checked: false,
    key: 'eat-in-kitchen',
  },
]

const floorData: Equipment[] = [
  {
    id: v4(),
    label: 'details.equipments.floor.floorboards',
    checked: false,
    key: 'floorboards',
  },
  {
    id: v4(),
    label: 'details.equipments.floor.tiles',
    checked: false,
    key: 'tiles',
  },
  {
    id: v4(),
    label: 'details.equipments.floor.linoleum',
    checked: false,
    key: 'linoleum',
  },
  {
    id: v4(),
    label: 'details.equipments.floor.carpet-floor',
    checked: false,
    key: 'carpet-floor',
  },
  {
    id: v4(),
    label: 'details.equipments.floor.granite',
    checked: false,
    key: 'granite',
  },
  {
    id: v4(),
    label: 'details.equipments.floor.marble',
    checked: false,
    key: 'marble',
  },
  {
    id: v4(),
    label: 'details.equipments.floor.screed',
    checked: false,
    key: 'screed',
  },
  {
    id: v4(),
    label: 'details.equipments.floor.plastic-floor',
    checked: false,
    key: 'plastic-floor',
  },
  {
    id: v4(),
    label: 'details.equipments.floor.parquet',
    checked: false,
    key: 'parquet',
  },
  {
    id: v4(),
    label: 'details.equipments.floor.terracotta',
    checked: false,
    key: 'terracotta',
  },
  {
    id: v4(),
    label: 'details.equipments.floor.laminate',
    checked: false,
    key: 'laminate',
  },
  {
    id: v4(),
    label: 'details.equipments.floor.stone-floor',
    checked: false,
    key: 'stone-floor',
  },
]

const windowsData: Equipment[] = [
  {
    id: v4(),
    label: 'details.equipments.windows.external-sun-protection',
    checked: false,
    key: 'external-sun-protection',
  },
  {
    id: v4(),
    label: 'details.equipments.windows.internal-sun-protection',
    checked: false,
    key: 'internal-sun-protection',
  },
  {
    id: v4(),
    label: 'details.equipments.windows.roller-shutters',
    checked: false,
    key: 'roller-shutters',
  },
  {
    id: v4(),
    label: 'details.equipments.windows.glare-protection',
    checked: false,
    key: 'glare-protection',
  },
  {
    id: v4(),
    label: 'details.equipments.windows.double-glazing',
    checked: false,
    key: 'double-glazing',
  },
  {
    id: v4(),
    label: 'details.equipments.windows.multiple-glazing',
    checked: false,
    key: 'multiple-glazing',
  },
  {
    id: v4(),
    label: 'details.equipments.windows.plastic-windows',
    checked: false,
    key: 'plastic-windows',
  },
]

const extraData: Equipment[] = [
  {
    id: v4(),
    label: 'details.equipments.extras.furnished',
    checked: false,
    key: 'furnished',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.outdoor-shower',
    checked: false,
    key: 'outdoor-shower',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.fitness-room',
    checked: false,
    key: 'fitness-room',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.playground',
    checked: false,
    key: 'playground',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.lake-access',
    checked: false,
    key: 'lake-access',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.laundry-drying-room',
    checked: false,
    key: 'laundry-drying-room',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.alarm-system',
    checked: false,
    key: 'alarm-system',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.bike-room',
    checked: false,
    key: 'bike-room',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.sauna',
    checked: false,
    key: 'sauna',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.wine-cellar',
    checked: false,
    key: 'wine-cellar',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.winter-garden',
    checked: false,
    key: 'winter-garden',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.bathtub',
    checked: false,
    key: 'bathtub',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.storage-room',
    checked: false,
    key: 'storage-room',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.steam-bath',
    checked: false,
    key: 'steam-bath',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.grill-area',
    checked: false,
    key: 'grill-area',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.wheelchair-accessible',
    checked: false,
    key: 'wheelchair-accessible',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.swimming-pool',
    checked: false,
    key: 'swimming-pool',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.whirlpool',
    checked: false,
    key: 'whirlpool',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.library',
    checked: false,
    key: 'library',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.garden-use',
    checked: false,
    key: 'garden-use',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.near-subway',
    checked: false,
    key: 'near-subway',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.wellness-area',
    checked: false,
    key: 'wellness-area',
  },
  {
    id: v4(),
    label: 'details.equipments.extras.bath-with-window',
    checked: false,
    key: 'bath-with-window',
  },
]

export const data: Data[] = [
  {
    id: v4(),
    title: 'details.equipments.outlook.title',
    data: outlookData,
    key: 'outlook',
  },
  {
    id: v4(),
    title: 'details.equipments.free-space.title',
    data: freeSpaceData,
    key: 'free-space',
  },
  {
    id: v4(),
    title: 'details.equipments.kitchen.title',
    data: kitchenData,
    key: 'kitchen',
  },
  {
    id: v4(),
    title: 'details.equipments.floor.title',
    data: floorData,
    key: 'floor',
  },
  {
    id: v4(),
    title: 'details.equipments.windows.title',
    data: windowsData,
    key: 'windows',
  },
  {
    id: v4(),
    title: 'details.equipments.extras.title',
    data: extraData,
    key: 'extras',
  },
]
