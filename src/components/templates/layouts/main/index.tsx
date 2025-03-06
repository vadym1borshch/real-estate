import { Outlet } from 'react-router-dom'
import Footer from '../../../organisms/footer'
import Toast from '../../../molecules/toast'
import { useEffect } from 'react'
import { usePathname } from '../../../../helpers/hooks/usePathname.ts'

export const MainLayout = () => {
  const path = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [path])

  return (
    <div className="max-w-[1440px] p-5">
      <Outlet />
      <Footer />
      <Toast />
    </div>
  )
}
