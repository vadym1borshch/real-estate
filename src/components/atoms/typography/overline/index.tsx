import { cn } from '../../../../helpers/ui.ts'

interface Props {
  text: string
  className?: string
}

const Overline = ({ text, className }: Props) => {
  return (
    <span className={cn('font-[600]', className)}>{text}</span>
  )
}

export default Overline