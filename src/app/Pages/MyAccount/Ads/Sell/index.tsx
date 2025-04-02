import { Outlet } from 'react-router-dom'
import { AdsLayout } from '../AdsLayout.tsx'
import { useNavigate } from '../../../../../helpers/hooks/useNavigate.ts'
import { ADS_ROUTES } from '../../../../../@constants/routes.ts'
import { useAppSelector } from '../../../../../store'
import { selectCurrentAds } from '../../../../../store/adsSlice/selectors.ts'
import { useApplyCorrectBreadcrumbLink, useFetchAds } from '../helpers.ts'

export const Sell = () => {
  useFetchAds()
  useApplyCorrectBreadcrumbLink(ADS_ROUTES.SELL_ADS)

  const navigate = useNavigate()

  const routeHandler = (path: string) => {
    navigate(`${ADS_ROUTES.SELL_ADS}/${path}`)
  }

  const ads = useAppSelector(selectCurrentAds('buy'))

  return (
    <AdsLayout onClick={routeHandler} anyAds={!!ads?.length}>
      <Outlet />
    </AdsLayout>
  )
}
