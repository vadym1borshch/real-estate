import { cn } from '../../../../helpers/ui.ts'

interface Props {
  text: string;
  className?: string;
}

const SmallFont = ({ text, className }: Props) => {
  return (
    <span className={cn('text-xs leading-[1.125rem]', className)}>{text}</span>
  )
}

export default SmallFont