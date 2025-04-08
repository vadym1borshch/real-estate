import Logo from '../../atoms/logo'
import Link from '../../atoms/link'
import { links } from './mock.ts'
import { useTranslation } from 'react-i18next'
import { useWindowDimensions } from '../../../helpers/hooks/useWindowDimensions.ts'
import { ROUTES } from '../../../@constants/routes.ts'
import { BREAKPOINTS } from '../../../@constants'

const Footer = () => {
  const { t } = useTranslation()
  const { width } = useWindowDimensions()
  const isMedium = width <= BREAKPOINTS.XL

  return (
    <footer className="bg-jungle-green flex min-h-[27.8125rem] flex-col rounded-lg px-6 py-[1.875rem] lg:px-[7.5rem]">
      <div className="flex w-full justify-center md:justify-start">
        <Logo variant="white" />
      </div>
      <div className="flex flex-col pt-[1.875rem] pb-[4.5rem] lg:flex-row">
        <div className="flex w-full flex-col items-center md:items-start">
          <p className="text-white">Fylpi Immo-online GmbH</p>
          <p className="text-center text-white">
            Forchheimergasse 3/13, 1230 Wien, Österreich
          </p>
          <p className="flex py-6">
            <Link
              href={''}
              className="footer-link relative pr-[0.3125rem] text-white"
            >
              office@fylpi.at
            </Link>
            <Link
              href={''}
              className="footer-link relative pl-[0.3125rem] text-white"
            >
              www.fylpi.at
            </Link>
          </p>
          <Link
            href={''}
            iconId="youtubeIcon"
            className="text-white"
            iconClassName="h-12 w-12"
          >
            YouTube
          </Link>
        </div>
        <div className="flex w-full pt-[1.875rem] lg:pt-0 xl:justify-between">
          <div className="flex w-full flex-col items-center gap-[0.9375rem] text-center md:items-start md:text-start lg:items-end xl:w-1/2 xl:items-start">
            {(isMedium ? links : links.slice(0, 5)).map((link) => (
              <Link className="text-white" key={link.label} href={link.href}>
                {t(link.label)}
              </Link>
            ))}
          </div>
          <div className="hidden xl:flex xl:w-1/2 xl:flex-col xl:gap-[0.9375rem]">
            {links.slice(5).map((link) => (
              <Link className="text-white" key={link.label} href={link.href}>
                {t(link.label)}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-seafoam-green flex flex-col items-center justify-between border-t py-6 md:flex-row">
        <p className="text-seafoam-green order-3 pt-3 md:order-1 md:pt-0 text-center">
          © 2024 Fylpi. Alle Rechte vorbehalten.
        </p>
        <p className="flex flex-col items-center gap-3 pt-6 md:order-2 md:flex-row md:gap-6 md:pt-0">
          <Link
            href={ROUTES.CONTACTS}
            className="text-seafoam-green hover:text-white"
          >
            {t('contacts.title')}
          </Link>
          <Link
            href={ROUTES.TERMS_OF_USE}
            className="text-seafoam-green hover:text-white"
          >
            {t('footer.links.terms-of-use')}
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
