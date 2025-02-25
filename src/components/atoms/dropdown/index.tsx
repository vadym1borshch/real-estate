
import { ReactNode, useRef } from 'react'
import Button from '../button'
import { cn } from '../../../helpers/ui.ts'
import { ClickOutsideWrapper } from '../../wrappers/outsideClick'
import { DropdownMenu } from './Menu.tsx'

interface Props {
  children: ReactNode;
  label: ReactNode
  open: boolean
  setOpen: (open: boolean) => void
  withIcon?: boolean
  triggerButtonClassName?: string
  variant?: 'outlined' | 'text' | 'filled',
  dropdownClassName?: string
}

const Dropdown = ({ children, label, open, setOpen, withIcon, triggerButtonClassName, variant = 'text', dropdownClassName }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <ClickOutsideWrapper onClickOutside={() => setOpen(false)} className="relative ">
      <div ref={ref}>
        <Button
          onClick={() => setOpen(!open)}
          variant={variant}
          className={cn('text-base z-1000 relative', triggerButtonClassName)}
          iconId={withIcon ? 'chevronDownIcon' : undefined}
          iconClassName={cn('transition-transform', { 'rotate-180 transition-transform': open })}
        >
          {label}
        </Button>
        {open && (<DropdownMenu className={dropdownClassName}>
          {children}
        </DropdownMenu>)}
      </div>
    </ClickOutsideWrapper>
  )
}

export default Dropdown