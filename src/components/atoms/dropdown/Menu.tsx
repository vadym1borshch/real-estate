import { ReactNode } from 'react'
import { cn } from '../../../helpers/ui.ts'

interface Props {
  children: ReactNode
  className?: string
}

export const DropdownMenu = ({ children, className }: Props) => {

  return (
    <div
      className={cn('absolute z-1001 flex flex-col top-12 lg:top-16 cursor-pointer w-full min-w-fit bg-white border-transparent border-[0px] mt-1.5 rounded-md max-h-[150px] overflow-y-auto', className)}
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