import { Outlet } from 'react-router-dom'
import Footer from '../../../organisms/footer'
import Toast from '../../../molecules/toast'
import { useEffect } from 'react'
import { usePathname } from '../../../../helpers/hooks/usePathname.ts'

export const MainLayout = () => {

  const path = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [path])

  return (
    <div className="p-5 max-w-[1440px]">
      <Outlet />
      <Footer />
      <Toast />
    </div>
  )
}