import React from 'react'
import { cn } from '../../../../helpers/ui.ts'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  className?: string
}

const LargeFont = ({ text, className, ...rest }: Props) => {
  return (
    <span className={cn('text-xl leading-[1.875rem]', className)} {...rest}>
      {text}
    </span>
  )
}

export default LargeFont
