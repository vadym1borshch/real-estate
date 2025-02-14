import { cn } from '../../../../helpers/ui.ts'

interface Props {
  text: string;
  className?: string;
}

const LargeFont = ({ text, className }: Props) => {
  return (
    <span className={cn('text-xl leading-[1.875rem]', className)}>{text}</span>
  )
}

export default LargeFont