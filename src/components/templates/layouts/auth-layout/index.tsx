import Header from '../../../organisms/header'
import { Outlet } from 'react-router-dom'
import Toast from '../../../molecules/toast'

export const AuthLayout = () => {
  return (
    <div className="flex h-full w-full flex-col items-center px-5">
      <Header />
      <Outlet />
      <Toast />
    </div>
  )
}
