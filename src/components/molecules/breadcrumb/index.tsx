import { Fragment, useEffect, useState } from 'react'
import { Breadcrumbs as TBreadcrumbs } from '@material-tailwind/react'
import { usePathname } from '../../../helpers/hooks/usePathname.ts'
import Link from '../../atoms/link'
import { useTranslation } from 'react-i18next'
import Icon from '../../atoms/icon'
import useTranslationSearch from '../../../helpers/hooks/useTranslationSearch.ts'

const initLinks = [
  {
    id: '1',
    href: '/',
    label: 'links.home',
  },
]

const Breadcrumb = () => {
  const [links, setLinks] = useState(initLinks)
  const path = usePathname()
  const { t } = useTranslation()
  const {getTranslationByKey} = useTranslationSearch()

  useEffect(() => {
    if (path) {
      const segments = path.split("/").filter(Boolean);
      let accumulatedPath = "";

      const newLinks = segments.map((segment) => {
        accumulatedPath += `/${segment}`;
        return {
          id: accumulatedPath,
          href: accumulatedPath,
          label: getTranslationByKey(`${segment}.title`) || segment,
        };
      });

      setLinks([...initLinks, ...newLinks]);
    }
  }, [path]);

  return (
    <div className="w-full mb-[30px]">
      <TBreadcrumbs
        fullWidth
        className="breadcrumb"
        separator={
          <Icon id="caretRightIcon" className="text-blue-gray w-[5px] h-[8px]" />
        }
      >
        {links.map(({ id, href, label }, idx) => {
          const isDisabled = idx === links.length - 1
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