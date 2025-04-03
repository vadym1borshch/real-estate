import React from 'react'
import { cn } from '../../../../helpers/ui.ts'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  className?: string
}

const Caption = ({ text, className, ...rest }: Props) => {
  return (
    <span
      className={cn('text-xs font-[800] tracking-[0.1875rem]', className)}
      {...rest}
    >
      {text}
    </span>
  )
}

export default Caption
