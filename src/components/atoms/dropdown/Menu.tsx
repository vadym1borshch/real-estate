import { ReactNode } from 'react'
import { cn } from '../../../helpers/ui.ts'

interface Props {
  children: ReactNode
  className?: string
}

export const DropdownMenu = ({ children, className }: Props) => {

  return (
    <div
      className={cn('absolute z-1001 flex flex-col cursor-pointer top-full left-0 w-full min-w-fit bg-white border-transparent border-[0px] mt-1 rounded-md max-h-[150px] overflow-y-auto', className)}
      style={{
        position: 'absolute',
        top: '4rem',
        left: '0',
      }}
    >
      {children}
    </div>
  )
}