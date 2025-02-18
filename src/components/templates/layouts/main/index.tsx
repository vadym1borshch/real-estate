import Header from '../../../organisms/header'
import { Outlet } from 'react-router-dom'


export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div>Footer</div>
    </>
  )
}