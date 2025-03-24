import { RootState } from '../index'
import { createSelector } from 'reselect'
import { BuyKeys, RentKeys } from '../../components/organisms/home-page/popular-block/filtersKeys.ts'

export const selectBuyFilter = (state: RootState) => state.estates.buyFilter
export const selectRentFilter = (state: RootState) => state.estates.rentFilter
export const selectCurrentEstate = (state: RootState) => state.estates.currentEstate

export const selectEstates = createSelector(
  [(state: RootState) => state.estates.data],
  (data) => data ?? [],
)


export const selectCurrentPage = (state: RootState) => state.estates.currentPage

export const selectPaginatedEstates = (itemsPerPage: number) => createSelector(
  [selectEstates, selectCurrentPage],
  (estates, currentPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return estates.slice(startIndex, endIndex)
  },
)

export const selectTotalPages = (itemsPerPage: number) => createSelector(
  [selectEstates],
  (estates) => Math.ceil(estates.length / itemsPerPage),
)


export const selectTopEstates = createSelector(
  [selectEstates],
  (data) => data.filter(el => el.isTop),
)

export const selectFavoritesEstates = createSelector(
  [selectEstates],
  (data) => data.filter(el => el.favorite),
)

export const selectBuyEstates = createSelector(
  [selectEstates, selectBuyFilter],
  (data, buyFilter) =>
    data
      .filter(el => el.operation.key === 'buy' && !el.isTop)
      .filter(el => {
        if (buyFilter.key === BuyKeys.housing) {
          return el.type.key === 'house'
        }
        if (buyFilter.key === BuyKeys.multifamilyHousing) {
          return el.type.key === 'apartment'
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
      .filter(el => el.operation.key === 'rent')
      .filter(el => {
        if (rentFilter.key === RentKeys.houses) {
          return el.type.key === 'house'
        }
        if (rentFilter.key === RentKeys.apartments) {
          return el.type.key === 'apartment'
        }
        if (rentFilter.key === RentKeys.other) {
          return el
        }
        return null
      }),
)
