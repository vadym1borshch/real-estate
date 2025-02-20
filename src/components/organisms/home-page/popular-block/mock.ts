import { BuyKeys, RentKeys } from './filtersKeys.ts'

export interface FilterOption {
  key: string;
  title: string;
}

export const buyFilters: FilterOption[] = [
  {
    key: BuyKeys.housing,
    title: 'home.popular.filters.buy.residential-real-estate',
  }, {
    key: BuyKeys.multifamilyHousing,
    title: 'home.popular.filters.buy.apt-buildings',
  }, {
    key: BuyKeys.assets,
    title: 'home.popular.filters.buy.investment-obj',
  }, {
    key: BuyKeys.businessProperty,
    title: 'home.popular.filters.buy.commercial-real-estate',
  }, {
    key: BuyKeys.other,
    title: 'home.popular.filters.buy.other',
  },
] as const

export const rentFilters: FilterOption[] = [
  {
    key: RentKeys.houses,
    title: 'home.popular.filters.rent.houses',
  },
  {
    key: RentKeys.apartments,
    title: 'home.popular.filters.rent.apt',
  },
  {
    key: RentKeys.businessProperty,
    title: 'home.popular.filters.rent.commercial-real-estate',
  }, {
    key: RentKeys.other,
    title: 'home.popular.filters.rent.other',
  },
] as const