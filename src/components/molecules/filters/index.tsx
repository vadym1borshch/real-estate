import { ReactNode } from 'react'
import { cn } from '../../../helpers/ui.ts'
import { Filter } from './Filter.tsx'
import { data } from './mock.ts'

interface Props {
  className?: string
  children?: ReactNode
}

export const Filters = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        'z-1000 grid w-full grid-cols-2 justify-center gap-3 rounded-md p-3 backdrop-blur-[20px] lg:flex lg:flex-nowrap',
        className
      )}
    >
      {data.map((filter) => (
        <Filter key={filter.id} filter={filter} />
      ))}
      {children}
    </div>
  )
}
