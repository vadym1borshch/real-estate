import { cn } from '../../../../helpers/ui.ts'

interface Props {
  text: string,
  className?: string,
}

const H3 = ({ text, className }: Props) => {
  return (
    <h3 className={cn('font-500 text-2xl leading-[2.1rem]', className)}>{text}</h3>
  )
}

export default H3