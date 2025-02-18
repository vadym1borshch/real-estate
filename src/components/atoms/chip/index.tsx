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
      className={cn('w-fit h-[2.5rem] bg-seafoam-green text-md font-700 text-center px-[0.84375rem]', className)} />

  )
}

export default Chip