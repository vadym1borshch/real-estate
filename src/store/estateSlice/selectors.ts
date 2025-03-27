import { RootState } from '../index'
import { createSelector } from 'reselect'
import {
  BuyKeys,
  RentKeys,
} from '../../components/organisms/home-page/popular-block/filtersKeys.ts'
import { Search } from '../../contexts/SearchContext.tsx'

const parseFormattedPrice = (str: string): number => {
  const cleaned = str.replace(/\./g, '').replace(',', '.')
  return Number(cleaned)
}

export const selectBuyFilter = (state: RootState) => state.estates.buyFilter
export const selectRentFilter = (state: RootState) => state.estates.rentFilter
export const selectCurrentEstate = (state: RootState) =>
  state.estates.currentEstate

export const selectEstates = createSelector(
  [(state: RootState) => state.estates.data],
  (data) => data ?? []
)

export const selectCurrentPage = (state: RootState) => state.estates.currentPage

export const selectPaginatedEstates = (
  itemsPerPage: number,
  searchParams: Search
) =>
  createSelector([selectEstates, selectCurrentPage], (estates, currentPage) => {
    const filtered = estates.filter((estate) => {
      const size = +estate.size.livingAreaM2.split(' ')[0]
      const price = parseFormattedPrice(estate.price.split(' ')[0])

      if (searchParams.price_min && price < +searchParams.price_min)
        return false
      if (searchParams.price_max && price > +searchParams.price_max)
        return false
      if (searchParams.area_min && size < +searchParams.area_min) return false
      if (searchParams.area_max && size > +searchParams.area_max) return false

      if (searchParams.rooms) {
        const roomsParam = searchParams.rooms.split('-')
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
      if (
        searchParams.operation &&
        estate.operation.key !== searchParams.operation
      )
        return false
      if (searchParams.type && estate.type.key !== searchParams.type)
        return false

      if (
        searchParams.address &&
        !estate.address.location.toLowerCase().includes(searchParams.address)
      )
        return false

      return true
    })

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filtered.slice(startIndex, endIndex)
  })

export const selectTotalPages = (itemsPerPage: number) =>
  createSelector([selectEstates], (estates) =>
    Math.ceil(estates.length / itemsPerPage)
  )

export const selectTopEstates = createSelector([selectEstates], (data) =>
  data.filter((el) => el.isTop)
)

export const selectFavoritesEstates = createSelector([selectEstates], (data) =>
  data.filter((el) => el.favorite)
)

export const selectBuyEstates = createSelector(
  [selectEstates, selectBuyFilter],
  (data, buyFilter) =>
    data
      .filter((el) => el.operation.key === 'buy' && !el.isTop)
      .filter((el) => {
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
      })
)

export const selectRentEstates = createSelector(
  [selectEstates, selectRentFilter],
  (data, rentFilter) =>
    data
      .filter((el) => el.operation.key === 'rent')
      .filter((el) => {
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
      })
)
