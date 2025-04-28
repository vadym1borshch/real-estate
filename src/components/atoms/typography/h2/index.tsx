import { cn } from '../../../../helpers/ui.ts'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string
  className?: string
}

const H2 = ({ text, className, ...rest }: Props) => {
  return (
    <h2
      className={cn(
        'font-500 text-2xl leading-[2.925rem] lg:text-4xl',
        className
      )}
      {...rest}
    >
      {text}
    </h2>
  )
}

export default H2
