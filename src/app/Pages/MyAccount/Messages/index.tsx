import { ContentLayout } from '../ContentLayout.tsx'
import { usePathname } from '../../../../helpers/hooks/usePathname.ts'
import { ROUTES } from '../../../../@constants/routes.ts'

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

  return (
    <ContentLayout
      route={ROUTES.messages}
      currentPage={currentPage}
      tabs={tabs}
    />
  )
}
