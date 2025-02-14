import { cn } from '../../../helpers/ui.ts'

interface IIconBaseProps {
  id: string;
  className?: string;
}

const Icon = ({ id, className }: IIconBaseProps) => {
  return (
    <svg className={cn('w-full h-full', className)}
    >
      <use  href={`../../../../public/icons/sprite.svg#${id}`} />
    </svg>
  )
}

export default Icon

