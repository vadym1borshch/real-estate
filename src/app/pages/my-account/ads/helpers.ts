import { useEffect } from 'react'
import {
  AdsFilterStatus,
  fetchAds,
  setCurrentAdsStatus,
} from '../../../../store/adsSlice'
import { useAppDispatch, useAppSelector } from '../../../../store'
import { usePathname } from '../../../../helpers/hooks/usePathname.ts'
import { useNavigate } from '../../../../helpers/hooks/useNavigate.ts'
import { selectUser } from '../../../../store/userSlice/selectors.ts'

export const useFetchAds = () => {
  const dispatch = useAppDispatch()
  const path = usePathname()
  const user = useAppSelector(selectUser)

  const correctStatusAfterRefreshHandler = () => {
    const status = path.split('/')
    dispatch(setCurrentAdsStatus(status[status.length - 1] as AdsFilterStatus))
  }

  useEffect(() => {
    if (user) {
      dispatch(fetchAds({userId: user.id}))
    }

    correctStatusAfterRefreshHandler()
  }, [user])
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
