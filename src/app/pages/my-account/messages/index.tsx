import { ContentLayout } from '../ContentLayout.tsx'
import { usePathname } from '../../../../helpers/hooks/usePathname.ts'
import { MY_ACCOUNT, ROUTES } from '../../../../@constants/routes.ts'
import { useEffect } from 'react'
import { useNavigate } from '../../../../helpers/hooks/useNavigate.ts'

export const tabs = [
  {
    type: 'inboxes',
    title: 'inboxes.title',
  },
  {
    type: 'sent',
    title: 'sent.title',
  },
  {
    type: 'archive',
    title: 'archive.title',
  },
]

export const Messages = () => {
  const path = usePathname()
  const splitPath = path.split('/')
  const currentPage = splitPath[splitPath.length - 1]
  const navigate = useNavigate()

  useEffect(() => {
    if (path === `/${ROUTES.MESSAGES}`) {
      navigate(ROUTES.MESSAGES + `/${MY_ACCOUNT.INBOXES}`)
    }
  }, [path])

  return (
    <ContentLayout
      route={ROUTES.MESSAGES}
      currentPage={currentPage}
      tabs={tabs}
    />
  )
}
