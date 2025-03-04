import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from '../../../organisms/header'
import Link from '../../../atoms/link'
import { Filters } from '../../../molecules/filters'
import Button from '../../../atoms/button'
import { useNavigate } from '../../../../helpers/hooks/useNavigate.ts'
import { useListing } from '../../../../contexts/ListingContext.tsx'

export const HomePageLayout = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { listingType } = useListing()
  return (
    <div className="relative w-full flex flex-col items-center">
      <div
        className="bg-[url(../../../../../public/HERO.png)] rounded-lg md:min-h-[720px] flex flex-col items-center w-full px-5 ">
        <Header className="px-6 lg:px-[6.25rem]" />
        <span
          className="font-200 text-[2rem] md:text-[3.75rem] max-w-[47.5rem] pt-[4.375rem] leading-[4.125rem] text-center">{t('title')}</span>
        <Filters className="bg-[#FAFAFA]/80 backdrop-blur-[5px]  mt-[9rem] max-w-[72.5rem]">
          <Button onClick={() => navigate(`/${listingType}`, true)}>
            {t('buttons.find')}
          </Button>
        </Filters>
        <Link
          href={`/${listingType}`}
          className="bg-[#ABC0B60D] rounded-md backdrop-blur-[3px]  mt-[1.8125rem] text-white mb-10 px-5 py-2.5"
        >
          {t('buttons.view-on-map')}
        </Link>
      </div>
      <Outlet />
    </div>
  )
}