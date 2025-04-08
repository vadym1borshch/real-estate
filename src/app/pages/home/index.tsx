import { useTranslation } from 'react-i18next'
import MainBlock from './main-block'
import { services } from '../../../common/mock.ts'
import LinkCard from '../../../components/molecules/link-card'
import EstateCard from '../../../components/molecules/estate-card'
import { PopularBlock } from './popular-block'
import FAQ from './faq'
import { useAppDispatch, useAppSelector } from '../../../store'
import { selectTopEstates } from '../../../store/estateSlice/selectors.ts'
import { useWindowDimensions } from '../../../helpers/hooks/useWindowDimensions.ts'
import { cn } from '../../../helpers/ui.ts'
import Slider from '../../../components/molecules/slider'
import Modal from '../../../components/molecules/modal'
import { BREAKPOINTS } from '../../../@constants'
import { selectIsConfirm } from '../../../store/ui/selectors.ts'
import { setIsConfirm } from '../../../store/ui/confirmEmailSlice.ts'

export const HomePage = () => {
  const { t } = useTranslation()
  const { width } = useWindowDimensions()
  const isLarge = width >= BREAKPOINTS.PRE_XL
  const topEstate = useAppSelector(selectTopEstates)
  const { isConfirm } = useAppSelector(selectIsConfirm)
  const dispatch = useAppDispatch()

  return (
    <div className="text-charcoal mt-[3.375rem] flex w-full flex-col items-center gap-[6.25rem] px-5 lg:mt-[5.625rem] lg:gap-[9.375rem]">
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
        <div
          className={cn('w-screen pt-[3.75rem]', {
            hidden: isLarge,
          })}
        >
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
        <div className="grid w-full grid-cols-1 gap-5 pt-[3.75rem] md:hidden">
          {topEstate.map((house) => (
            <EstateCard
              realEstate={house}
              key={house.id}
              className="max-w-full"
            />
          ))}
        </div>
        <div className="hidden grid-cols-3 gap-5 pt-[3.75rem] lg:grid lg:gap-10 lg:pt-[5.625rem]">
          {topEstate.map((house) => (
            <EstateCard realEstate={house} key={house.id} />
          ))}
        </div>
        <div className="hidden w-screen pt-[3.75rem] pl-2.5 md:block lg:hidden">
          <Slider slideWidth={360}>
            {topEstate.map((house) => (
              <EstateCard realEstate={house} key={house.id} />
            ))}
          </Slider>
        </div>
      </MainBlock>
      <PopularBlock />
      <FAQ />
      <Modal
        open={isConfirm}
        setOpen={() => dispatch(setIsConfirm(false))}
        title={t('register.confirm-register.modal.title')}
        childrenClassName="text-center"
        className="max-w-[35rem]"
      >
        {t('register.confirm-register.modal.p')}
      </Modal>
    </div>
  )
}
