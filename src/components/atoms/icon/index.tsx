import React from 'react'
import { cn } from '../../../helpers/ui.ts'

interface IIconBaseProps {
  id: string
  className?: string
  onClick?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const Icon = ({ id, className, onClick }: IIconBaseProps) => {
  return (
    <svg
      onClick={(e) => {
        if (onClick) {
          onClick(e)
        }
      }}
      onMouseDown={(e) => e.stopPropagation()}
      className={cn('h-full w-full', className)}
    >
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  )
}

export default Icon
