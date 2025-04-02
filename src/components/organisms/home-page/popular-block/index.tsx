import H2 from '../../../atoms/typography/h2'
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
    <div className="flex flex-col items-center gap-6">
      <H2 text={t('home.popular.main-title')} className="max-w-[35rem] text-2xl lg:text-4xl" />
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
