import { LanguageWrapper } from '../language-wrapper'
import { Outlet } from 'react-router-dom'

export const MainWrapper = () => {
  return (
    <LanguageWrapper>
      <Outlet />
    </LanguageWrapper>
  )
}
