import { Outlet } from 'react-router-dom'
import Tab from '../../../../components/atoms/tab'
import { useTranslation } from 'react-i18next'
import { usePathname } from '../../../../helpers/hooks/usePathname.ts'
import { ADS_ROUTES } from '../../../../@constants/routes.ts'
import { useNavigate } from '../../../../helpers/hooks/useNavigate.ts'

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
] as const

export const DetailsLayout = () => {
  const { t } = useTranslation()
  const path = usePathname()
  const navigate = useNavigate()
  const correctRoute = path.includes('rent-ads')
    ? ADS_ROUTES.rentAds
    : ADS_ROUTES.sellAds

  const splitPath = path.split('/')
  const currentPage = splitPath[splitPath.length - 1]

  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.type}
              label={t(tab.title)}
              selected={tab.type === currentPage}
              onClick={() => {
                navigate(`${correctRoute}/${tab.type}`)
              }}
            />
          )
        })}
      </div>
      <Outlet />
    </div>
  )
}
