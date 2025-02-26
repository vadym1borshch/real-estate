import Header from '../../../organisms/header'
import { Outlet } from 'react-router-dom'
import { usePathname } from '../../../../helpers/hooks/usePathname.ts'
import { ROUTES } from '../../../../@constants/routes.ts'
import Breadcrumb from '../../../molecules/breadcrumb'

export const DefaultPageLayout = () => {
  const path = usePathname()
  return (
    <div className="w-full flex flex-col items-center ">
      <Header />
      {path !== ROUTES.estates && <Breadcrumb />}
      <Outlet />
    </div>
  )
}