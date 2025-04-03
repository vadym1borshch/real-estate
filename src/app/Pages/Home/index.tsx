import { useTranslation } from 'react-i18next'
import MainBlock from './main-block'
import { services } from '../../../common/mock.ts'
import LinkCard from '../../../components/molecules/link-card'
import EstateCard from '../../../components/molecules/estate-card'
import { PopularBlock } from './popular-block'
import FAQ from './faq'
import { useAppSelector } from '../../../store'
import { selectTopEstates } from '../../../store/estateSlice/selectors.ts'
import { useWindowDimensions } from '../../../helpers/hooks/useWindowDimensions.ts'
import { cn } from '../../../helpers/ui.ts'
import Slider from '../../../components/molecules/slider'
import { useEmailConfirm } from '../../../contexts/ConfirmationEmailContext.tsx'
import Modal from '../../../components/molecules/modal'
import { BREAKPOINTS } from '../../../@constants'

export const HomePage = () => {
  const { t } = useTranslation()
  const { width } = useWindowDimensions()
  const isLarge = width >= BREAKPOINTS.PRE_XL
  const topEstate = useAppSelector(selectTopEstates)
  const { isConfirm, setIsConfirm } = useEmailConfirm()

  return (
    <div className="text-charcoal mt-[3.375rem] lg:mt-[5.625rem] flex w-full flex-col items-center gap-[6.25rem] lg:gap-[9.375rem] px-5">
      <MainBlock
        title={t('home.operations.main-title')}
        description={t('home.operations.descriptions')}
      >
        <div
          className={cn('hidden grid-cols-4 gap-10 pt-[5.625rem]', {
            'lg:grid': isLarge,
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
        <div className={cn("w-screen pt-[3.75rem]", {
          "hidden": isLarge,
        })}>
          <Slider>
            {services.map((service) => (
              <LinkCard
                key={service.label}
                src={service.src}
                label={t(service.label)}
                descriptions={t(service.descriptions)}
                href="#"
              />
            ))}
          </Slider>
        </div>
      </MainBlock>
      <MainBlock
        title={t('home.top-ads.main-title')}
        description={t('home.top-ads.descriptions')}
      >
        <div className="grid grid-cols-1 gap-5 lg:gap-10 pt-[3.75rem] lg:pt-[5.625rem] sm:grid-cols-2 xl:grid-cols-3">
          {topEstate.map((house) => (
            <EstateCard realEstate={house} key={house.id} />
          ))}
        </div>
      </MainBlock>
      <PopularBlock />
      <FAQ />
      <Modal
        open={isConfirm}
        setOpen={() => setIsConfirm(false)}
        title={t('register.confirm-register.modal.title')}
        childrenClassName="text-center"
        className="max-w-[35rem]"
      >
        {t('register.confirm-register.modal.p')}
      </Modal>
    </div>
  )
}
