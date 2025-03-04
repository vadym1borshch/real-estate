import { createContext, useContext, useMemo } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import useTranslationSearch from '../helpers/hooks/useTranslationSearch.ts'
import { usePathname } from '../helpers/hooks/usePathname.ts'
import { useListing } from './ListingContext.tsx'

interface SearchContextProps {
  address: string | null;
  price_min: string | null;
  price_max: string | null;
  area_min: string | null;
  area_max: string | null;
  rooms: string | null;
  operation: string;
  type: string;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined)

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchParams] = useSearchParams()
  const { getTranslationByKey } = useTranslationSearch()
  const paramsType = searchParams.get('type')
  const { listingType } = useListing()

  const translateOperationKey = `real-estate.operations.${listingType.replace(/\//g, '')}`
  const translateTypeKey = `real-estate.type.${paramsType}`

  const value = useMemo(() => ({
    address: searchParams.get('address'),
    price_min: searchParams.get('price_min'),
    price_max: searchParams.get('price_max'),
    area_min: searchParams.get('area_min'),
    area_max: searchParams.get('area_max'),
    rooms: searchParams.get('rooms'),
    operation: translateOperationKey,
    type: translateTypeKey,
  }), [searchParams, getTranslationByKey, listingType, paramsType])

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

export const useSearchContext = () => {
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider')
  }
  return context
}
