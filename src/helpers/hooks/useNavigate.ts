import { useLocation, useNavigate as RouterUseNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const useNavigate = () => {
  const navigate = RouterUseNavigate()
  const { i18n } = useTranslation()
  const location = useLocation()

  return (path: string, keepSearchParams = false) => {
    const langPrefix = `/${i18n.language}`
    const search = keepSearchParams ? location.search : ''
    navigate(`${langPrefix}${path}${search}`)
  }
}