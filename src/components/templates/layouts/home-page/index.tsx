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
    <div className="relative flex w-full flex-col items-center">
      <div className="flex w-full flex-col items-center rounded-lg bg-[url(../../../../../public/HERO.png)] px-5 md:min-h-[720px]">
        <Header className="px-6 lg:px-[6.25rem]" />
        <span className="font-200 max-w-[47.5rem] pt-[4.375rem] text-center text-[2rem] leading-[4.125rem] md:text-[3.75rem]">
          {t('title')}
        </span>
        <Filters className="mt-[9rem] max-w-[72.5rem] bg-[#FAFAFA]/80 backdrop-blur-[5px]">
          <Button
            onClick={() => navigate(`/${listingType}`, true)}
            className="col-span-full mx-auto w-full max-w-[420px]"
          >
            {t('buttons.find')}
          </Button>
        </Filters>
        <Link
          href={`/${listingType}`}
          className="mt-[1.8125rem] mb-10 rounded-md bg-[#ABC0B60D] px-5 py-2.5 text-white backdrop-blur-[3px]"
        >
          {t('buttons.view-on-map')}
        </Link>
      </div>
      <Outlet />
    </div>
  )
}
