import { LanguageWrapper } from '../language-wrapper'
import { Outlet } from 'react-router-dom'
import { SearchProvider } from '../../../contexts/SearchContext.tsx'

export const MainWrapper = () => {
  return (
    <SearchProvider>
      <LanguageWrapper>
        <Outlet />
      </LanguageWrapper>
    </SearchProvider>
  )
}
