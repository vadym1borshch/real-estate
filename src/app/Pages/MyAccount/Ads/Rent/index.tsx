import { AdsLayout } from '../AdsLayout.tsx'
import { useNavigate } from '../../../../../helpers/hooks/useNavigate.ts'
import { Outlet } from 'react-router-dom'
import { ADS_ROUTES } from '../../../../../@constants/routes.ts'
import { useAppDispatch, useAppSelector } from '../../../../../store'
import { selectCurrentAds } from '../../../../../store/adsSlice/selectors.ts'
import { useEffect } from 'react'
import { fetchAds } from '../../../../../store/adsSlice'

export const Rent = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const routeHandler = (path: string) => {
    navigate(`${ADS_ROUTES.rentAds}/${path}`)
  }

  const ads = useAppSelector(selectCurrentAds("rent"))


  console.log(ads)
  useEffect(() => {
    dispatch(fetchAds())
  }, [])

  return (
    <AdsLayout onClick={routeHandler} anyAds={!!ads?.length}>
      <Outlet />
    </AdsLayout>
  )
}
