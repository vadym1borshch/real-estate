import React from 'react'
import { cn } from '../../../../helpers/ui.ts'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  className?: string
}

const Overline = ({ text, className, ...rest }: Props) => {
  return (
    <span className={cn('font-[600]', className)} {...rest}>
      {text}
    </span>
  )
}

export default Overline
