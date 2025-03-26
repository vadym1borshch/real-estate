import { OperationFilter } from './OperationFilter.tsx'
import EstateCard from '../../../molecules/estate-card'
import { cn } from '../../../../helpers/ui.ts'
import { FilterOption } from './mock.ts'
import { useWindowDimensions } from '../../../../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../../../../helpers/common.ts'
import { RealEstate } from '../../../../store/commonMock.ts'

interface Props {
  label: string
  filters: FilterOption[]
  estates: RealEstate[]
  className?: string
}

export const Operation = ({ label, filters, estates, className }: Props) => {
  const { width } = useWindowDimensions()
  const isMedium = width <= BREAKPOINTS.xl
  const isMobile = width <= BREAKPOINTS['pre-md']

  return (
    <div className={cn('flex flex-col items-center gap-[90px]', className)}>
      <OperationFilter label={label} filters={filters} />
      <div className={cn('grid grid-cols-3 gap-10', {
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