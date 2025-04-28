import { ReactNode } from 'react'
import { cn } from '../../../helpers/ui.ts'

interface Props {
  children: ReactNode
  className?: string
}

export const DropdownMenu = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        'absolute top-12 z-1001 mt-1.5 flex max-h-[150px] w-full min-w-fit cursor-pointer flex-col overflow-y-auto rounded-md border-[0px] border-transparent bg-white lg:top-16',
        className
      )}
      style={{
        position: 'absolute',
        right: 'auto',
        left: 'auto',
      }}
    >
      {children}
    </div>
  )
}
