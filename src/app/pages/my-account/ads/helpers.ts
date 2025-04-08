import { useEffect } from 'react'
import {
  AdsFilterStatus,
  fetchAds,
  setCurrentAdsStatus,
} from '../../../../store/adsSlice'
import { useAppDispatch } from '../../../../store'
import { usePathname } from '../../../../helpers/hooks/usePathname.ts'
import { useNavigate } from '../../../../helpers/hooks/useNavigate.ts'

export const useFetchAds = () => {
  const dispatch = useAppDispatch()
  const path = usePathname()

  const correctStatusAfterRefreshHandler = () => {
    const status = path.split('/')
    dispatch(setCurrentAdsStatus(status[status.length - 1] as AdsFilterStatus))
  }

  useEffect(() => {
    dispatch(fetchAds())
    correctStatusAfterRefreshHandler()
  }, [])
}

export const useApplyCorrectBreadcrumbLink = (route: string) => {
  const path = usePathname()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    if (path === route) {
      navigate(`${route}/active`)
      dispatch(setCurrentAdsStatus('active'))
    }
  }, [path, route])
}
