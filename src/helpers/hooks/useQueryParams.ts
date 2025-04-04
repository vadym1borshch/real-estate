import { useAppDispatch } from '../../store'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import { refreshFilters } from '../../store/estateSlice'
import { ListingType } from '../../contexts/ListingContext.tsx'

export const useQueryParams = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      refreshFilters({
        address: searchParams.get('address'),
        priceMin: searchParams.get('priceMin'),
        priceMax: searchParams.get('priceMax'),
        areaMin: searchParams.get('areaMin'),
        areaMax: searchParams.get('areaMax'),
        rooms: searchParams.get('rooms'),
        type: searchParams.get('type'),
      })
    )
  }, [searchParams.toString()])

  useEffect(() => {
    const currentListing = localStorage.getItem('operation')
    if (currentListing) {
      dispatch(
        refreshFilters({
          listingType: currentListing as ListingType,
        })
      )
    }
  }, [])
}
