import { Fragment } from 'react'
import { Breadcrumbs } from '@material-tailwind/react'
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
    <div className="mb-5 w-full max-w-[72.5rem] lg:mb-7.5">
      <Breadcrumbs
        fullWidth
        className="breadcrumb flex gap-1.5"
        separator={
          <Icon
            id="caretRightIcon"
            className="text-blue-gray h-[8px] w-[5px]"
          />
        }
        placeholder={null}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {items.map(({ id, href, label }, idx) => {
          const isDisabled = idx === items.length - 1
          return (
            <Fragment key={id}>
              <Link
                href={href}
                disabled={isDisabled}
                className="text-blue-gray pr-1.5 capitalize"
              >
                {t(label.toLocaleLowerCase())}
              </Link>
            </Fragment>
          )
        })}
      </Breadcrumbs>
    </div>
  )
}

export default Breadcrumb
