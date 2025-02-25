import { Outlet } from 'react-router-dom'
import Footer from '../../../organisms/footer'
import Toast from '../../../molecules/toast'

export const MainLayout = () => {
  return (
    <div className="p-5 max-w-[1440px]">
      <Outlet />
      <Footer />
      <Toast />
    </div>
  )
}