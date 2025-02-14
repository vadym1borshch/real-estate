import { cn } from '../../../../helpers/ui.ts'

interface Props {
  text: string
  className?: string
}

const Caption = ({ text, className }: Props) => {
  return (
    <span className={cn('font-[800] text-xs tracking-[0.1875rem]', className)}>{text}</span>
  )
}

export default Caption