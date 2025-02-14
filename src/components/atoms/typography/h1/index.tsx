import { cn } from '../../../../helpers/ui.ts'

interface Props {
  text: string,
  className?: string,
}

const H1 = ({ text, className }: Props) => {
  return (
    <h1 className={cn('font-250 text-6xl leading-[4.125rem] tracking-[-1px]', className)}>{text}</h1>
  )
}

export default H1