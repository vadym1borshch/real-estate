import { Outlet } from 'react-router-dom'
import Footer from '../../../organisms/footer'
import Toast from '../../../molecules/toast'
import { useEffect } from 'react'
import { usePathname } from '../../../../helpers/hooks/usePathname.ts'
import { cn } from '../../../../helpers/ui.ts'
import { ROUTES } from '../../../../@constants/routes.ts'
import { useWindowDimensions } from '../../../../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../../../../helpers/common.ts'

export const MainLayout = () => {
  const path = usePathname()
  const { width } = useWindowDimensions()

  const isMobile = width < BREAKPOINTS.md

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [path])

  return (
    <div
      className={cn('max-w-[1440px] p-5', {
        'px-7.5': path !== ROUTES.home && isMobile,
      })}
    >
      <Outlet />
      <Footer />
      <Toast />
    </div>
  )
}
