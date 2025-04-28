import React from 'react'
import { cn } from '../../../../helpers/ui.ts'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string
  className?: string
}

const H3 = ({ text, className, ...rest }: Props) => {
  return (
    <h3
      className={cn('font-500 text-xl leading-[2.1rem] lg:text-2xl', className)}
      {...rest}
    >
      {text}
    </h3>
  )
}

export default H3
