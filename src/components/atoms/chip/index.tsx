import { Chip as TChip } from '@material-tailwind/react'
import { cn } from '../../../helpers/ui.ts'

interface Props {
  value: string
  className?: string
}

const Chip = ({ value, className }: Props) => {
  return (
    <TChip
      value={value}
      className={cn(
        'bg-seafoam-green text-md font-700 h-[2.5rem] w-fit px-[0.84375rem] text-center',
        className
      )}
    />
  )
}

export default Chip
