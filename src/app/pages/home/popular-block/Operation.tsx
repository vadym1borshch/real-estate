import { OperationFilter } from './OperationFilter.tsx'
import EstateCard from '../../../../components/molecules/estate-card'
import { cn } from '../../../../helpers/ui.ts'
import { FilterOption } from './mock.ts'
import { useTranslation } from 'react-i18next'
import { RealEstate } from '../../../../store/estateSlice'

interface Props {
  label: string
  filters: FilterOption[]
  estates: RealEstate[]
  className?: string
}

export const Operation = ({ label, filters, estates, className }: Props) => {
  const { t } = useTranslation()
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center gap-[3.75rem] lg:gap-[5.625rem]',
        className
      )}
    >
      <OperationFilter label={label} filters={filters} />
      {!estates.length && (
        <div className="w-full text-center">{t('common.not-found')}</div>
      )}
      {!!estates.length && (
        <div
          className={cn(
            'grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:place-items-center lg:grid-cols-3 lg:gap-10'
          )}
        >
          {estates.map((house) => (
            <EstateCard
              key={house.id}
              realEstate={house}
              className="max-w-full md:max-w-[22.5rem]"
            />
          ))}
        </div>
      )}
    </div>
  )
}
