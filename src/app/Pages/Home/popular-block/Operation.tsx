import { OperationFilter } from './OperationFilter.tsx'
import EstateCard from '../../../../components/molecules/estate-card'
import { cn } from '../../../../helpers/ui.ts'
import { FilterOption } from './mock.ts'
import { useWindowDimensions } from '../../../../helpers/hooks/useWindowDimensions.ts'
import { RealEstate } from '../../../../store/commonMock.ts'
import { BREAKPOINTS } from '../../../../@constants'

interface Props {
  label: string
  filters: FilterOption[]
  estates: RealEstate[]
  className?: string
}

export const Operation = ({ label, filters, estates, className }: Props) => {
  const { width } = useWindowDimensions()
  const isMedium = width <= BREAKPOINTS.XL
  const isMobile = width <= BREAKPOINTS.PRE_MD

  return (
    <div className={cn('flex flex-col items-center gap-[3.75rem] lg:gap-[5.625rem]', className)}>
      <OperationFilter label={label} filters={filters} />
      <div className={cn('grid grid-cols-3 gap-5 lg:gap-10 ', {
        'grid-cols-2': isMedium || estates.length < 3,
        'grid-cols-1 mx-auto': isMobile || !estates.length || estates.length < 2,
      })}>
        {!estates.length && (<div className="text-center w-full">No objects found...</div>)}
        {estates.map((house) => (
          <EstateCard key={house.id} realEstate={house} />
        ))}
      </div>
    </div>
  )
}