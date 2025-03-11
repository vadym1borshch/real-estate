import { Outlet } from 'react-router-dom'
import AuthButtons from '../../../components/molecules/auth-buttons'

export const MyAccount = () => {
  return (
    <div className="grid w-full max-w-[72.5rem] grid-cols-1 gap-10 md:grid-cols-[1fr_2fr] pb-[9.375rem] items-start">
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
