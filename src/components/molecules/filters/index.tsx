import { ReactNode } from 'react'
import { cn } from '../../../helpers/ui.ts'
import { Filter } from './Filter.tsx'
import { data } from './mock.ts'

interface Props {
  className?: string,
  children?: ReactNode
}

export const Filters = ({ className, children }: Props) => {
  return (
    <div
      className={cn('p-3 backdrop-blur-[20px] rounded-md w-full flex gap-3 flex-wrap lg:flex-nowrap justify-center z-1000', className)}>
      {data.map((filter) => <Filter key={filter.id} filter={filter} />)}
      {children}
    </div>
  )
}