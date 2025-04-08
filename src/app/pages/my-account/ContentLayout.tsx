import Tab from '../../../components/atoms/tab'
import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useNavigate } from '../../../helpers/hooks/useNavigate.ts'

interface Props {
  route: string
  currentPage: string
  tabs: {
    type: string
    title: string
  }[]
}

export const ContentLayout = ({ route, tabs, currentPage }: Props) => {
  const navigate = useNavigate()
  const { t } = useTranslation()
  return (
    <div className="flex w-full flex-col gap-6 lg:gap-10">
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.type}
              label={t(tab.title)}
              selected={tab.type === currentPage}
              onClick={() => {
                navigate(`${route}/${tab.type}`)
              }}
            />
          )
        })}
      </div>
      <Outlet />
    </div>
  )
}
