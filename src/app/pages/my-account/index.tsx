import { Outlet } from 'react-router-dom'
import AuthButtons from '../../../components/molecules/auth-buttons'
import { usePathname } from '../../../helpers/hooks/usePathname.ts'
import { useNavigate } from '../../../helpers/hooks/useNavigate.ts'
import { useEffect } from 'react'
import { MY_ACCOUNT } from '../../../@constants/routes.ts'
import { useAppDispatch } from '../../../store'
import {
  fetchMessages,
  setCurrentMessagesId,
} from '../../../store/messagesSlice'

export const MyAccount = () => {
  const path = usePathname()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (path === `/${MY_ACCOUNT.ROOT}`) {
      navigate(MY_ACCOUNT.ROOT + `/${MY_ACCOUNT.PROFILE}`)
    }
  }, [path])

  useEffect(() => {
    dispatch(fetchMessages())
  }, [])

  useEffect(() => {
    dispatch(setCurrentMessagesId(null))
  }, [path])

  return (
    <div className="grid w-full max-w-[72.5rem] grid-cols-1 items-start gap-10 pb-[6.25rem] lg:pb-[9.375rem] md:grid-cols-[22.5rem_auto]">
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
