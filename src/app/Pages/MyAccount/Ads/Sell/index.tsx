import { AdsLayout } from '../AdsLayout.tsx'
import { Outlet } from 'react-router-dom'
import { useNavigate } from '../../../../../helpers/hooks/useNavigate.ts'
import { ADS_ROUTES } from '../../../../../@constants/routes.ts'
import { useAppDispatch, useAppSelector } from '../../../../../store'
import { selectCurrentAds } from '../../../../../store/adsSlice/selectors.ts'
import { useEffect } from 'react'
import { fetchAds } from '../../../../../store/adsSlice'

export const Sell = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const routeHandler = (path: string) => {
    navigate(`${ADS_ROUTES.sellAds}/${path}`)
  }

  const ads = useAppSelector(selectCurrentAds("buy"))

  useEffect(() => {
    dispatch(fetchAds())
  }, [])

  return (
    <AdsLayout onClick={routeHandler} anyAds={!!ads?.length}>
      <Outlet />
    </AdsLayout>
  )
}
