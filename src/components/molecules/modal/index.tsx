import { ReactNode, useEffect } from 'react'
import Button from '../../atoms/button'
import Icon from '../../atoms/icon'
import H3 from '../../atoms/typography/h3'
import { cn } from '../../../helpers/ui.ts'

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
  children: ReactNode
  title?: string
  className?: string
  childrenClassName?: string
  titleClassName?: string
}

const Modal = ({
  open,
  setOpen,
  children,
  title,
  className,
  childrenClassName,
  titleClassName,
}: Props) => {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const modal = document.getElementById('modal')
      if (modal && !modal.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleOutsideClick)
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [open, setOpen])

  if (!open) return null

  return (
    <div className="modal fixed inset-0 z-50000 flex items-center justify-center">
      <div className="bg-charcoal absolute inset-0 opacity-50" />
      <div
        id="modal"
        className={cn(
          'relative z-10 mx-4 w-full rounded-lg bg-white p-6 shadow-lg',
          className
        )}
      >
        <div className="flex flex-col items-center">
          <Button
            onClick={() => setOpen(false)}
            variant="text"
            className="h-fit self-end p-0"
          >
            <Icon
              id="closeIcon"
              className="text-charcoal h-[24px] w-[24px]"
              onClick={() => setOpen(false)}
            />
          </Button>

          {title && (
            <H3 text={title} className={cn('mt-3 mb-6', titleClassName)} />
          )}
        </div>
        <div className={cn('px-[2.875rem] pb-[2.875rem]', childrenClassName)}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
