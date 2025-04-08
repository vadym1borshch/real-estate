import { cn } from '../../../../helpers/ui.ts'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string
  className?: string
}

const H1 = ({ text, className, ...rest }: Props) => {
  return (
    <h1
      className={cn(
        'font-250 lg:font-200 text-4xl leading-[4.125rem] tracking-[-1px] lg:text-6xl',
        className
      )}
      {...rest}
    >
      {text}
    </h1>
  )
}

export default H1
