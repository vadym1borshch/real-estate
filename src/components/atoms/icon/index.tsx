import { cn } from '../../../helpers/ui.ts'

interface IIconBaseProps {
  id: string;
  className?: string;
  onClick?: () => void;
}

const Icon = ({ id, className, onClick }: IIconBaseProps) => {
  return (
    <svg
      onClick={(e) => {
        e.stopPropagation()
        onClick && onClick()
      }}
      className={cn('w-full h-full', className)}
    >
      <use href={`../../../../public/icons/sprite.svg#${id}`} />
    </svg>
  )
}

export default Icon

