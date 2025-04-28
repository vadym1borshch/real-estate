import H2 from '../../../../components/atoms/typography/h2'
import { Operation } from './Operation.tsx'
import { useAppSelector } from '../../../../store'
import {
  selectBuyEstates,
  selectRentEstates,
} from '../../../../store/estateSlice/selectors.ts'
import { useTranslation } from 'react-i18next'
import { buyFilters, rentFilters } from './mock.ts'

export const PopularBlock = () => {
  const { t } = useTranslation()
  const rent = useAppSelector(selectRentEstates)
  const buy = useAppSelector(selectBuyEstates)

  return (
    <div className="flex w-full flex-col items-center gap-6 md:w-auto lg:max-w-[72.5rem]">
      <H2
        text={t('home.popular.main-title')}
        className="max-w-[35rem] text-2xl lg:text-4xl"
      />
      <Operation
        estates={buy}
        filters={buyFilters}
        label={t('real-estate.operations.buy')}
      />
      <Operation
        estates={rent}
        className="pt-[2.25rem] lg:pt-[4.125rem]"
        filters={rentFilters}
        label={t('real-estate.operations.rent')}
      />
    </div>
  )
}
