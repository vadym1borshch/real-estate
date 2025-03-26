import { createContext, ReactNode, useContext, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useListing } from './ListingContext.tsx'

export interface Search {
  address: string | null
  price_min: string | null
  price_max: string | null
  area_min: string | null
  area_max: string | null
  rooms: string | null
  operation: string
  type: string | null
}

const SearchContext = createContext<Search | undefined>(undefined)

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchParams] = useSearchParams()
  const { listingType } = useListing()

  const value = useMemo(
    () => ({
      address: searchParams.get('address'),
      price_min: searchParams.get('price_min'),
      price_max: searchParams.get('price_max'),
      area_min: searchParams.get('area_min'),
      area_max: searchParams.get('area_max'),
      rooms: searchParams.get('rooms'),
      operation: listingType,
      type: searchParams.get('type'),
    }),
    [listingType, searchParams.toString()]
  )

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  )
}

export const useSearchContext = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider')
  }
  return context
}
