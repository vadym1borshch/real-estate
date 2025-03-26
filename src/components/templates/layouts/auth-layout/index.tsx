import Header from '../../../organisms/header'
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <div className="flex h-full w-full flex-col items-center px-5">
      <Header />
      <Outlet />
    </div>
  )
}
