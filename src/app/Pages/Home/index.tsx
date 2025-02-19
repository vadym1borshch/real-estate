import { useTranslation } from 'react-i18next'
import MainBlock from '../../../components/organisms/home-page/main-block'
import { services } from '../../../common/mock.ts'
import LinkCard from '../../../components/molecules/link-card'
import HouseCard from '../../../components/molecules/house-card'
import { PopularBlock } from '../../../components/organisms/home-page/popular-block'
import FAQ from '../../../components/organisms/home-page/faq'
import { useAppSelector } from '../../../store'
import { selectTopEstates } from '../../../store/estateSlice/selectors.ts'

export const HomePage = () => {
  const { t } = useTranslation()
  const topEstate = useAppSelector(selectTopEstates)
  return (
    <div className="text-charcoal -mt-[50px] w-full flex flex-col items-center gap-[9.375rem]">
      <MainBlock
        title={t('home.operations.main-title')}
        description={t('home.operations.descriptions')}
      >
        <div className="pt-[5.625rem] w-full flex gap-10">
          {services.map((service) => (
            <LinkCard
              key={service.label}
              src={service.src}
              label={t(service.label)}
              descriptions={t(service.descriptions)}
              href=""
            />
          ))}
        </div>
      </MainBlock>
      <MainBlock
        title={t('home.top-ads.main-title')}
        description={t('home.top-ads.descriptions')}
      >
        <div className="pt-[5.625rem] w-full flex gap-10">
          {topEstate.map((house) => (
            <HouseCard realEstate={house} key={house.id} />
          ))}
        </div>
      </MainBlock>
      <PopularBlock />
      <FAQ />
    </div>
  )
}
