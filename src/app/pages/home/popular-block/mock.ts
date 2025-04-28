import { BuyKeys, RentKeys } from './filtersKeys.ts'

export interface FilterOption {
  key: string
  title: string
}

export const buyFilters: FilterOption[] = [
  {
    key: BuyKeys.housing,
    title: 'filters.buy.residential-real-estate',
  },
  {
    key: BuyKeys.multifamilyHousing,
    title: 'filters.buy.apt-buildings',
  },
  {
    key: BuyKeys.assets,
    title: 'filters.buy.investment-obj',
  },
  {
    key: BuyKeys.businessProperty,
    title: 'filters.buy.commercial-real-estate',
  },
  {
    key: BuyKeys.other,
    title: 'filters.buy.other',
  },
] as const

export const rentFilters: FilterOption[] = [
  {
    key: RentKeys.houses,
    title: 'filters.rent.houses',
  },
  {
    key: RentKeys.apartments,
    title: 'filters.rent.apt',
  },
  {
    key: RentKeys.businessProperty,
    title: 'filters.rent.commercial-real-estate',
  },
  {
    key: RentKeys.other,
    title: 'filters.rent.other',
  },
] as const
