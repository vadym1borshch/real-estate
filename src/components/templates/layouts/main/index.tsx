import { Outlet } from 'react-router-dom'
import Footer from '../../../organisms/footer'

export const MainLayout = () => {
  return (
    <div className="p-5 max-w-[1440px]">
      <Outlet />
      <Footer />
    </div>
  )
}