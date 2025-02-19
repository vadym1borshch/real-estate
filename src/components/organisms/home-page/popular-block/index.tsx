import H2 from '../../../atoms/typography/h2'
import { Operation } from './Operation.tsx'
import { useAppSelector } from '../../../../store'
import { selectBuyEstates, selectRentEstates } from '../../../../store/estateSlice/selectors.ts'
import { useTranslation } from 'react-i18next'

export const PopularBlock = () => {
  const { t } = useTranslation()
  const rent = useAppSelector(selectRentEstates)
  const buy = useAppSelector(selectBuyEstates)

  return (
    <div className="flex flex-col items-center gap-6">
      <H2 text="POPULÄRE" />
      <Operation estates={buy} filters={['Häuser', 'Wohnungen', 'Gewerbeimmobilien', 'Sonstiges']} label={t('real-estate.operations.buy')} />
      <Operation estates={rent} className="pt-[66px] pb-6"
                 filters={['Häuser', 'Wohnungen', 'Gewerbeimmobilien', 'Sonstiges']} label={t('real-estate.operations.rent')} />
    </div>
  )
}