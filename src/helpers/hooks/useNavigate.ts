import { useLocation, useNavigate as RouterUseNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const useNavigate = () => {
  const navigate = RouterUseNavigate()
  const { i18n } = useTranslation()
  const location = useLocation()

  return (path: string | number, keepSearchParams = false) => {
    if (path === -1) {
      navigate(-1)
      return
    }

    const langPrefix = `/${i18n.language}`
    const search = keepSearchParams ? location.search : ''
    navigate(`${langPrefix}/${path}${search}`)
  }
}
