import Logo from '../../atoms/logo'
import Link from '../../atoms/link'
import { links } from './common.ts'
import { useTranslation } from 'react-i18next'
import { useWindowDimensions } from '../../../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../../../helpers/common.ts'

const Footer = () => {
  const { t } = useTranslation()
  const { width } = useWindowDimensions()
  const isMedium = width <= BREAKPOINTS.xl
  return (
    <footer className="bg-jungle-green min-h-[27.8125rem] mb-5 mx-5 rounded-lg px-6 lg:px-[7.5rem] py-[1.875rem] flex flex-col">
      <div>
        <Logo variant="white" />
      </div>
      <div className="flex flex-col lg:flex-row pb-[4.5rem] pt-[1.875rem]">
        <div className="w-full">
          <p className="text-white">Fylpi Immo-online GmbH</p>
          <p className="text-white">Forchheimergasse 3/13, 1230 Wien, Österreich</p>
          <p className="flex py-6">
            <Link href={''} className="footer-link text-white relative pr-[0.3125rem]">office@fylpi.at</Link>
            <Link href={''} className="footer-link text-white relative pl-[0.3125rem]">www.fylpi.at</Link>
          </p>
          <Link href={''} iconId="youtubeIcon" className="text-white" iconClassName="h-[48px] w-[48px] lg:w-12 lg:h-12">YouTube</Link>
        </div>
        <div className="w-full flex xl:justify-between pt-[1.875rem] lg:pt-0">
          <div className="w-full  xl:w-1/2 flex items-start lg:items-end xl:items-start text-start flex-col gap-[0.9375rem]">
            {(isMedium ? links : links.slice(0, 5)).map((link) => (
              <Link className="text-white " key={link.label} href={link.href}>{t(link.label)}</Link>
            ))}
          </div>
          <div className="hidden xl:w-1/2 xl:flex xl:flex-col xl:gap-[0.9375rem]">
            {links.slice(5).map((link) => (
              <Link className="text-white" key={link.label} href={link.href}>{t(link.label)}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between border-t border-seafoam-green py-6">
        <p className="text-seafoam-green">© 2024 Fylpi. Alle Rechte vorbehalten.</p>
        <p className="flex items-center gap-6 pt-6 md:pt-0">
          <Link href="" className="text-seafoam-green">Impressum</Link>
          <Link href="" className="text-seafoam-green">Nutzungsbedingungen</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer