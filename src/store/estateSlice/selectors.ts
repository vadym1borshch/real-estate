import { RootState } from '../index'
import { createSelector } from 'reselect'
import { BuyKeys, RentKeys } from '../../components/organisms/home-page/popular-block/filtersKeys.ts'

export const selectBuyFilter = (state: RootState) => state.estates.buyFilter
export const selectRentFilter = (state: RootState) => state.estates.rentFilter

export const selectEstates = createSelector(
  [(state: RootState) => state.estates.data],
  (data) => data ?? [],
)

export const selectTopEstates = createSelector(
  [selectEstates],
  (data) => data.filter(el => el.isTop),
)

export const selectBuyEstates = createSelector(
  [selectEstates, selectBuyFilter],
  (data, buyFilter) =>
    data
      .filter(el => el.operation === 'real-estate.operations.buy' && !el.isTop)
      .filter(el => {
        if (buyFilter.key === BuyKeys.housing) {
          return el.type === 'real-estate.type.house'
        }
        if (buyFilter.key === BuyKeys.multifamilyHousing) {
          return el.type === 'real-estate.type.apartment'
        }

        if (buyFilter.key === BuyKeys.other) {
          return el
        }
        return null
      }),
)

export const selectRentEstates = createSelector(
  [selectEstates, selectRentFilter],
  (data, rentFilter) =>
    data
      .filter(el => el.operation === 'real-estate.operations.rent')
      .filter(el => {
        if (rentFilter.key === RentKeys.houses) {
          return el.type === 'real-estate.type.house'
        }
        if (rentFilter.key === RentKeys.apartments) {
          return el.type === 'real-estate.type.apartment'
        }
        if (rentFilter.key === RentKeys.other) {
          return el
        }
        return null
      }),
)
