import Header from '../../../organisms/header'
import { Outlet } from 'react-router-dom'

export const DefaultPageLayout = () => {
  return (
    <div className="w-full flex flex-col items-center ">
      <Header />
      <Outlet />
    </div>
  )
}