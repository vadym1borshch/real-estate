import Header from '../../../organisms/header'
import hero from '/HERO.png?url'
import { Outlet } from 'react-router-dom'

export const HomePageLayout = () => {
  return (
    <div className="relative w-full px-5 max-w-[1440px]">
      <Header className="px-[120px]"/>
      <img src={hero} alt="hero" className="relative -top-[140px] h-fit object-cover -z-10" />
      <Outlet />
    </div>
  )
}