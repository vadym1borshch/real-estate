import { cn } from '../../../../helpers/ui.ts'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string
  className?: string
}

const H2 = ({ text, className, ...rest }: Props) => {
  return (
    <h2
      className={cn('font-500 text-2xl lg:text-4xl leading-[2.925rem]', className)}
      {...rest}
    >
      {text}
    </h2>
  )
}

export default H2
