import { Fragment, ReactNode } from 'react'
import { Drawer as TDrawer } from '@material-tailwind/react'
import { cn } from '../../../helpers/ui.ts'
import { useWindowDimensions } from '../../../helpers/hooks/useWindowDimensions.ts'

interface Props {
  placement?: 'bottom' | 'top' | 'left' | 'right'
  open: boolean
  setOpen: (open: boolean) => void
  children: ReactNode
  className?: string
}

const Drawer = ({
  className,
  open,
  setOpen,
  children,
  placement = 'right',
}: Props) => {
  const { width, height } = useWindowDimensions()
  return (
    <Fragment>

      <TDrawer
        className={cn(
          'fixed top-0 left-0 z-[10000] h-screen w-screen transition-transform duration-300 p-2.5',
          open ? 'translate-x-0' : 'translate-x-full',
          className
        )}
        placement={placement}
        open={open}
        onClose={() => setOpen(!open)}
        placeholder={null}
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        size={width}

      >
        <div
          className="bg-jungle-green rounded-md"
          style={{ height: height - 15 }}
        >
          {children}
        </div>
      </TDrawer>
    </Fragment>
  )
}

export default Drawer
