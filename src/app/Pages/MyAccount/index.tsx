import { Outlet } from 'react-router-dom'
import AuthButtons from '../../../components/molecules/auth-buttons'
import { usePathname } from '../../../helpers/hooks/usePathname.ts'
import { useNavigate } from '../../../helpers/hooks/useNavigate.ts'
import { useEffect } from 'react'
import { ROUTES } from '../../../@constants/routes.ts'

export const MyAccount = () => {
  const path = usePathname()
  const navigate = useNavigate()
  useEffect(() => {
    if (path === ROUTES.myAccount) {
      navigate(ROUTES.profile)
    }
  }, [path])

  return (
    <div className="grid w-full max-w-[72.5rem] grid-cols-1 items-start gap-10 pb-[9.375rem] md:grid-cols-[22.5rem_auto]">
      <div className="hidden flex-col md:flex">
        <AuthButtons
          onClick={() => {}}
          buttonClassName="text-charcoal border border-blue-gray hover:bg-light-gray2 "
        />
      </div>
      <Outlet />
    </div>
  )
}
