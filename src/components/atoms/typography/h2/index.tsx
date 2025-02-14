import { cn } from '../../../../helpers/ui.ts'

interface Props {
  text: string,
  className?: string,
}

const H2 = ({ text, className }: Props) => {
  return (
    <h2 className={cn('font-500 text-4xl leading-[2.925rem]', className)}>{text}</h2>
  )
}

export default H2