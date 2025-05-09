import Header from '../../../organisms/header'
import { Outlet } from 'react-router-dom'
import { usePathname } from '../../../../helpers/hooks/usePathname.ts'
import Breadcrumb from '../../../molecules/breadcrumb'
import { useEffect, useState } from 'react'
import useTranslationSearch from '../../../../helpers/hooks/useTranslationSearch.ts'
import { ROUTES } from '../../../../@constants/routes.ts'

const initLinks = [
  {
    id: '1',
    href: '',
    label: 'links.home',
  },
]

export const DefaultPageLayout = () => {
  const [links, setLinks] = useState(initLinks)
  const path = usePathname()
  const { getTranslationByKey } = useTranslationSearch()

  useEffect(() => {
    if (path) {
      const segments = path.split('/').filter(Boolean)
      let accumulatedPath = ''

      const newLinks = segments.map((segment) => {
        accumulatedPath += `/${segment}`
        return {
          id: accumulatedPath,
          href: accumulatedPath.substring(1),
          label: getTranslationByKey(`${segment}.title`) || segment,
        }
      })

      setLinks([...initLinks, ...newLinks])
    }
  }, [path])

  return (
    <div className="flex w-full flex-col items-center">
      <Header />
      {path !== `/${ROUTES.RENT}` &&
        path !== `/${ROUTES.BUY}` &&
        path !== `/${ROUTES.ESTATES}` && <Breadcrumb items={links} />}
      <Outlet />
    </div>
  )
}
