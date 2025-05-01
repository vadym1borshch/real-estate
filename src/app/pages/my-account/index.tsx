import { Outlet } from 'react-router-dom'
import AuthButtons from '../../../components/molecules/auth-buttons'
import { usePathname } from '../../../helpers/hooks/usePathname.ts'
import { useNavigate } from '../../../helpers/hooks/useNavigate.ts'
import { useEffect } from 'react'
import { MY_ACCOUNT, ROUTES } from '../../../@constants/routes.ts'
import { useAppDispatch, useAppSelector } from '../../../store'
import {
  fetchMessages,
  setCurrentMessagesId,
} from '../../../store/messagesSlice'
import { selectUser } from '../../../store/userSlice/selectors.ts'

export const MyAccount = () => {
  const path = usePathname()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUser)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate(ROUTES.HOME)
    }
  }, [])

  useEffect(() => {
    if (path === `/${MY_ACCOUNT.ROOT}`) {
      navigate(MY_ACCOUNT.ROOT + `/${MY_ACCOUNT.PROFILE}`)
    }
  }, [path])

  useEffect(() => {
    if (user) {
      dispatch(fetchMessages({ userId: user.id }))
    }
  }, [user])

  useEffect(() => {
    dispatch(setCurrentMessagesId(null))
  }, [path])

  return (
    <div className="grid w-full max-w-[72.5rem] grid-cols-1 items-start gap-10 pb-[6.25rem] md:grid-cols-[22.5rem_auto] lg:pb-[9.375rem]">
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
