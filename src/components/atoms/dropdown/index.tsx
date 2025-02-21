import {
  Menu,
  MenuHandler,
  MenuList,
} from '@material-tailwind/react'
import { ReactNode, useRef } from 'react'
import Button from '../button'
import { cn } from '../../../helpers/ui.ts'
import { useElementSizes } from '../../../helpers/hooks/useElementsSizes.ts'
import {
  useDefineScrollbar, useScrollbarWidth,
} from '../../../helpers/hooks/useScrollBarWidth.ts'

interface Props {
  children: ReactNode;
  label: ReactNode
  open: boolean
  setOpen: (open: boolean) => void
  withIcon?: boolean
  triggerButtonClassName?: string
  variant?: 'outlined' | 'text' | 'filled',
}

const Dropdown = ({ children, label, open, setOpen, withIcon, triggerButtonClassName, variant = 'text' }: Props) => {
  const ref = useRef<HTMLButtonElement | null>(null)

  const { containerDimension } = useElementSizes({ containerRef: ref, containerDimensionProp: 'width' })
  const hasScrollbar = useDefineScrollbar('.menu-list-class')
  const scrollbarWidth = useScrollbarWidth()

  return (
    <Menu open={open} handler={() => setOpen(!open)} ref={ref}>
      <MenuHandler>
        <Button
          onClick={() => {
          }}
          variant={variant}
          className={cn('text-base z-1000', triggerButtonClassName)}
          iconId={withIcon ? 'chevronDownIcon' : undefined}
          iconClassName={cn('transition-transform', { 'rotate-180 transition-transform': open })}
        >
          {label}
        </Button>
      </MenuHandler>
      <MenuList
        className="w-fit min-w-fit border-transparent border-[0px] px-0 mt-4"
      >
        <div
          style={{ minWidth: `${hasScrollbar ? containerDimension - scrollbarWidth : containerDimension}px` }}
          className="menu-list-class cursor-pointer outline-none max-h-[10.75rem] overflowY-auto"
        >
          {children}
        </div>
      </MenuList>
    </Menu>
  )
}

export default Dropdown