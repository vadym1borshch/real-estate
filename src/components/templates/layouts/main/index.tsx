import { Outlet } from 'react-router-dom'
import Footer from '../../../organisms/footer'
import Toast from '../../../molecules/toast'
import { useEffect } from 'react'
import { usePathname } from '../../../../helpers/hooks/usePathname.ts'
import { cn } from '../../../../helpers/ui.ts'
import { ROUTES } from '../../../../@constants/routes.ts'

export const MainLayout = () => {
  const path = usePathname()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [path])

  return (
    <div
      className={cn('w-full overflow-x-hidden p-2.5 xl:px-7.5', {
        'px-7.5': path !== "/",
      })}
    >
      <Outlet />
      {path !== ROUTES.LOGIN && path !== ROUTES.REGISTER && <Footer />}
      <Toast />
    </div>
  )
}
