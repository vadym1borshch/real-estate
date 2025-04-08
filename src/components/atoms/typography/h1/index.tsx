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
        'font-250 text-6xl leading-[4.125rem] tracking-[-1px]',
        className
      )}
      {...rest}
    >
      {text}
    </h1>
  )
}

export default H1
