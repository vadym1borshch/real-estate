import { Outlet } from 'react-router-dom'
import Footer from '../../../organisms/footer'

export const MainLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}