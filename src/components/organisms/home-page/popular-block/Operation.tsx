import { OperationFilter } from './OperationFilter.tsx'
import HouseCard from '../../../molecules/house-card'
import { cn } from '../../../../helpers/ui.ts'
import { useAppSelector } from '../../../../store'
import { selectEstates } from '../../../../store/estateSlice/selectors.ts'
import { RealEstate } from '../../../../store/estateSlice'

interface Props {
  label: string
  filters: string[]
  estates: RealEstate[]
  className?: string
}

export const Operation = ({ label, filters, estates, className }: Props) => {

  return (
    <div className={cn('flex flex-col gap-[90px]', className)}>
      <OperationFilter label={label} filters={filters} />
      <div className="grid grid-cols-3 gap-10">
        {estates.map((house) => (
          <HouseCard key={house.id} realEstate={house} />
        ))}
      </div>
    </div>
  )
}