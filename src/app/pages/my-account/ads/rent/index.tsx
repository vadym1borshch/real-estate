import { AdsLayout } from '../AdsLayout.tsx'
import { useNavigate } from '../../../../../helpers/hooks/useNavigate.ts'
import { Outlet } from 'react-router-dom'
import { ADS_ROUTES } from '../../../../../@constants/routes.ts'
import { useAppSelector } from '../../../../../store'
import { selectCurrentAds } from '../../../../../store/adsSlice/selectors.ts'
import { useApplyCorrectBreadcrumbLink, useFetchAds } from '../helpers.ts'

export const Rent = () => {
  useFetchAds()
  useApplyCorrectBreadcrumbLink(ADS_ROUTES.RENT_ADS)

  const navigate = useNavigate()
  const routeHandler = (path: string) => {
    navigate(`${ADS_ROUTES.RENT_ADS}/${path}`)
  }

  const ads = useAppSelector(selectCurrentAds('rent'))

  return (
    <AdsLayout onClick={routeHandler} anyAds={!!ads?.length}>
      <Outlet />
    </AdsLayout>
  )
}
