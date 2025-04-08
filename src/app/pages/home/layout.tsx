import { Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from '../../../components/organisms/header'
import Link from '../../../components/atoms/link'
import { Filters } from '../../../components/molecules/filters'
import Button from '../../../components/atoms/button'
import { useNavigate } from '../../../helpers/hooks/useNavigate.ts'
import H1 from '../../../components/atoms/typography/h1'
import { useAppDispatch, useAppSelector } from '../../../store'
import { selectListingType } from '../../../store/estateSlice/selectors.ts'
import { setMode } from '../../../store/ui/modeSlice.ts'

export const HomePageLayout = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const listingType = useAppSelector(selectListingType)
  const dispatch = useAppDispatch()

  return (
    <div className="relative flex w-full flex-col items-center">
      <div className="flex w-full flex-col items-center rounded-lg bg-[url('/HERO.png')] bg-cover bg-no-repeat px-5 xl:px-[7.5rem] lg:h-[45rem] ">
        <Header />
        <H1
          className="font-250 lg:font-200 max-w-[47.5rem] pt-[4.375rem] text-center text-4xl leading-[2.1rem] lg:text-6xl lg:leading-[4.125rem]"
          text={t('title')}
        />

        <Filters className="bg-light-gray3/80 mt-[3.75rem] max-w-[72.5rem] backdrop-blur-[5px] lg:mt-[9.75rem]">
          <Button
            onClick={() => navigate(listingType, true)}
            className="col-span-full mx-auto w-full max-w-[26.25rem] lg:w-fit"
          >
            {t('buttons.find')}
          </Button>
        </Filters>
        <Link
          href={listingType}
          className="mt-[0.9375rem] mb-[1.3125rem] rounded-md bg-[#ABC0B60D] px-5 py-2.5 text-white backdrop-blur-[3px] lg:mt-[1.8125rem] lg:mb-10"
          onClick={() => {
            dispatch(setMode('map'))
          }}
        >
          {t('buttons.view-on-map')}
        </Link>
      </div>
      <Outlet />
    </div>
  )
}
