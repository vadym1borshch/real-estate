import { RootState } from '../index'
import { createSelector } from 'reselect'
import {
  BuyKeys,
  RentKeys,
} from '../../app/pages/home/popular-block/filtersKeys.ts'
import { selectUser } from '../userSlice/selectors.ts'

const parseFormattedPrice = (str: string): number => {
  const cleaned = str.replace(/\./g, '').replace(',', '.')
  return Number(cleaned)
}

export const selectBuyFilter = (state: RootState) => state.estates.buyFilter
export const selectIsLoading = (state: RootState) => state.estates.loading
export const selectFilters = (state: RootState) => state.estates.filters
export const selectListingType = (state: RootState) =>
  state.estates.filters.listingType
export const selectRentFilter = (state: RootState) => state.estates.rentFilter
export const selectCurrentEstate = (state: RootState) =>
  state.estates.currentEstate

export const selectEstates = createSelector(
  [(state: RootState) => state.estates.data],
  (data) => data ?? []
)

export const selectCurrentPage = (state: RootState) => state.estates.currentPage

export const selectPaginatedEstates = (itemsPerPage: number) =>
  createSelector(
    [selectEstates, selectCurrentPage, selectFilters],
    (estates, currentPage, filters) => {
      const filtered = estates.filter((estate) => {
        const size = +estate.livingAreaM2.split(' ')[0]
        const price = parseFormattedPrice(estate.price.split(' ')[0])

        if (filters.priceMin && price < +filters.priceMin) return false
        if (filters.priceMax && price > +filters.priceMax) return false
        if (filters.areaMin && size < +filters.areaMin) return false
        if (filters.areaMax && size > +filters.areaMax) return false

        if (filters.rooms) {
          const roomsParam = filters.rooms.split('-')
          const estateRooms = estate.rooms

          const hasMatch = roomsParam.some((room) => {
            const parsedRoom = +room
            if (parsedRoom >= 6) {
              return estateRooms >= parsedRoom
            }
            return estateRooms === parsedRoom
          })

          if (!hasMatch) return false
        }
        if (filters.listingType && estate.operationKey !== filters.listingType)
          return false
        if (filters.type && estate.typeKey !== filters.type) return false

        if (
          filters.address &&
          !estate.addressLocation.toLowerCase().includes(filters.address)
        )
          return false

        return true
      })

      const endIndex = currentPage * itemsPerPage
      return filtered.slice(0, endIndex)
    }
  )

export const selectTotalPages = (itemsPerPage: number) =>
  createSelector([selectEstates], (estates) =>
    Math.ceil(estates.length / itemsPerPage)
  )

export const selectTopEstates = createSelector([selectEstates], (data) =>
  data.filter((el) => el.isTop)
)

export const selectFavoritesEstates = createSelector(
  [selectEstates, selectUser],
  (data, user) => {
    if (user) {
      return data.filter((el) => el.favoredBy.includes(user.id))
    }
    return []
  }
)

export const selectBuyEstates = createSelector(
  [selectEstates, selectBuyFilter],
  (data, buyFilter) =>
    data
      .filter((el) => el.operationKey === 'buy' && !el.isTop)
      .filter((el) => {
        if (buyFilter.key === BuyKeys.housing) {
          return el.typeKey === 'house'
        }
        if (buyFilter.key === BuyKeys.multifamilyHousing) {
          return el.typeKey === 'apartment'
        }

        if (buyFilter.key === BuyKeys.other) {
          return el
        }
        return null
      })
)

export const selectRentEstates = createSelector(
  [selectEstates, selectRentFilter],
  (data, rentFilter) =>
    data
      .filter((el) => el.operationKey === 'rent')
      .filter((el) => {
        if (rentFilter.key === RentKeys.houses) {
          return el.typeKey === 'house'
        }
        if (rentFilter.key === RentKeys.apartments) {
          return el.typeKey === 'apartment'
        }
        if (rentFilter.key === RentKeys.other) {
          return el
        }
        return null
      })
)
