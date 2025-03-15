import { ReactNode, useRef } from 'react'
import Button from '../button'
import { cn } from '../../../helpers/ui.ts'
import { ClickOutsideWrapper } from '../../wrappers/outsideClick'
import { DropdownMenu } from './Menu.tsx'

interface Props {
  children: ReactNode
  label: ReactNode
  open: boolean
  setOpen: (open: boolean) => void
  withIcon?: boolean
  triggerButtonClassName?: string
  variant?: 'outlined' | 'text' | 'filled'
  dropdownClassName?: string
  iconId?: string
  iconClassName?: string
  id?: string
}

const Dropdown = ({
  children,
  label,
  open,
  setOpen,
  withIcon,
  triggerButtonClassName,
  variant = 'text',
  dropdownClassName,
  iconId,
  iconClassName,
  id,
}: Props) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const icon = iconId ? iconId : 'chevronDownIcon'

  return (
    <ClickOutsideWrapper
      onClickOutside={() => setOpen(false)}
      className="relative w-full md:w-auto"
    >
      <div ref={ref}>
        <Button
          onClick={() => setOpen(!open)}
          variant={variant}
          className={cn('relative z-1000 text-base', triggerButtonClassName)}
          iconId={withIcon ? icon : undefined}
          iconClassName={cn(
            'transition-transform',
            {
              'rotate-180 transition-transform': open,
            },
            iconClassName
          )}
          id={id}
        >
          {label}
        </Button>
        {open && (
          <DropdownMenu className={dropdownClassName}>{children}</DropdownMenu>
        )}
      </div>
    </ClickOutsideWrapper>
  )
}

export default Dropdown
