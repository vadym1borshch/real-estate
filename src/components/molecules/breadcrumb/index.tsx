import { Fragment } from 'react'
import { Breadcrumbs as TBreadcrumbs } from '@material-tailwind/react'
import Link from '../../atoms/link'
import Icon from '../../atoms/icon'
import { useTranslation } from 'react-i18next'

type Item = {
  id: string
  href: string
  label: string
}

interface Props {
  items: Item[]
}

const Breadcrumb = ({ items }: Props) => {
  const { t } = useTranslation()
  return (
    <div className="w-full mb-[30px]">
      <TBreadcrumbs
        fullWidth
        className="breadcrumb"
        separator={
          <Icon id="caretRightIcon" className="text-blue-gray w-[5px] h-[8px]" />
        }
      >
        {items.map(({ id, href, label }, idx) => {
          const isDisabled = idx === items.length - 1
          return (
            <Fragment key={id}>
              <Link
                href={href}
                disabled={isDisabled}
                className="text-blue-gray lowercase capitalize"
              >
                {t(label.toLocaleLowerCase())}
              </Link>
            </Fragment>
          )
        })}
      </TBreadcrumbs>
    </div>

  )
}

export default Breadcrumb