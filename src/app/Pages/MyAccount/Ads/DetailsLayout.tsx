import { usePathname } from '../../../../helpers/hooks/usePathname.ts'
import { ADS_ROUTES } from '../../../../@constants/routes.ts'
import { ContentLayout } from '../ContentLayout.tsx'

export const tabs = [
  {
    type: 'details',
    title: 'details.title',
  },
  {
    type: 'premises',
    title: 'premises.title',
  },
  {
    type: 'equipments',
    title: 'equipments.title',
  },
  {
    type: 'fees',
    title: 'fees.title',
  },
  {
    type: 'monthly-costs',
    title: 'monthly-costs.title',
  },
]

export const DetailsLayout = () => {
  const path = usePathname()
  const correctRoute = path.includes('rent-ads')
    ? ADS_ROUTES.RENT_ADS
    : ADS_ROUTES.SELL_ADS

  const splitPath = path.split('/')
  const currentPage = splitPath[splitPath.length - 1]

  return (
    <ContentLayout currentPage={currentPage} tabs={tabs} route={correctRoute} />
  )
}
