import { cn } from '../../../../helpers/ui.ts'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  className?: string
}

const SmallFont = ({ text, className, ...rest }: Props) => {
  return (
    <span className={cn('text-xs leading-[1.125rem]', className)} {...rest}>
      {text}
    </span>
  )
}

export default SmallFont
