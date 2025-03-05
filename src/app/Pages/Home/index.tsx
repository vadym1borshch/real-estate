import { useTranslation } from 'react-i18next'
import MainBlock from '../../../components/organisms/home-page/main-block'
import { services } from '../../../common/mock.ts'
import LinkCard from '../../../components/molecules/link-card'
import EstateCard from '../../../components/molecules/estate-card'
import { PopularBlock } from '../../../components/organisms/home-page/popular-block'
import FAQ from '../../../components/organisms/home-page/faq'
import { useAppSelector } from '../../../store'
import { selectTopEstates } from '../../../store/estateSlice/selectors.ts'
import { useWindowDimensions } from '../../../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../../../helpers/common.ts'
import { cn } from '../../../helpers/ui.ts'

export const HomePage = () => {
  const { t } = useTranslation()
  const { width } = useWindowDimensions()
  const isMedium = width <= BREAKPOINTS.xl
  const preMedium = width <= BREAKPOINTS.xmd
  const isMobile = width <= BREAKPOINTS.xsm
  const topEstate = useAppSelector(selectTopEstates)

  return (
    <div className="text-charcoal mt-[90px] flex w-full flex-col items-center gap-[9.375rem]">
      <MainBlock
        title={t('home.operations.main-title')}
        description={t('home.operations.descriptions')}
      >
        <div
          className={cn('grid grid-cols-4 gap-10 pt-[5.625rem]', {
            'grid-cols-2': isMedium,
            'mx-auto grid-cols-1': isMobile,
          })}
        >
          {services.map((service) => (
            <LinkCard
              key={service.label}
              src={service.src}
              label={t(service.label)}
              descriptions={t(service.descriptions)}
              href="#"
            />
          ))}
        </div>
      </MainBlock>
      <MainBlock
        title={t('home.top-ads.main-title')}
        description={t('home.top-ads.descriptions')}
      >
        <div
          className={cn('grid grid-cols-3 gap-10 pt-[5.625rem]', {
            'grid-cols-2': isMedium,
            'mx-auto grid-cols-1': preMedium,
          })}
        >
          {topEstate.map((house) => (
            <EstateCard realEstate={house} key={house.id} />
          ))}
        </div>
      </MainBlock>
      <PopularBlock />
      <FAQ />
    </div>
  )
}
