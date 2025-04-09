import { useEffect, useState, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store'
import { selectToast } from '../../../store/toastSlise/selectors'
import { removeToast } from '../../../store/toastSlise'
import Button from '../../atoms/button'
import { getToastColor } from './helper'
import { cn } from '../../../helpers/ui.ts'
import Icon from '../../atoms/icon'

type PositionType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
type HiddenTime = 3000 | 5000 | 10000 | 15000

interface IToast {
  position?: PositionType
  hiddenTime?: HiddenTime
}

const Toast = ({ position = 'bottom-right', hiddenTime = 10000 }: IToast) => {
  const toasts = useAppSelector(selectToast)
  const dispatch = useAppDispatch()
  const [visibleToasts, setVisibleToasts] = useState<{
    [key: number]: boolean
  }>({})
  const activeToastsRef = useRef(new Set<number>())

  const positionClasses = {
    'top-left': 'top-5 left-5 items-start',
    'top-right': 'top-5 right-5 items-end',
    'bottom-left': 'bottom-5 left-5 items-start',
    'bottom-right': 'bottom-5 right-5 items-end',
  }

  useEffect(() => {
    toasts.forEach((toast, i) => {
      if (!activeToastsRef.current.has(toast.id)) {
        activeToastsRef.current.add(toast.id)
        setTimeout(() => {
          setVisibleToasts((prev) => ({ ...prev, [toast.id]: true }))
        }, i * 300)
      }
    })
  }, [toasts])

  useEffect(() => {
    if (toasts.length === 0) return

    const closeToastsSequentially = () => {
      toasts.forEach((toast, i) => {
        setTimeout(
          () => {
            setVisibleToasts((prev) => ({ ...prev, [toast.id]: false }))
            setTimeout(() => {
              dispatch(removeToast(toast.id))
              activeToastsRef.current.delete(toast.id)
            }, 500)
          },
          hiddenTime + i * 500
        )
      })
    }

    closeToastsSequentially()
  }, [toasts, dispatch, hiddenTime])

  return (
    <div
      className={cn(
        'fixed z-50 flex flex-col-reverse gap-2',
        positionClasses[position]
      )}
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            'relative flex max-w-[18.75rem] min-w-[15.625rem] items-start justify-between overflow-hidden rounded-lg bg-transparent p-4 text-sm transition-all duration-500 ease-in-out',
            visibleToasts[toast.id]
              ? 'translate-x-0 opacity-100'
              : position.includes('right')
                ? 'translate-x-full opacity-0'
                : '-translate-x-full opacity-0',
            getToastColor(toast.type),
            `border-2 ${getToastColor(toast.type)}`
          )}
        >
          <div className="flex items-center">
            <Icon
              id="errorIconOutlined"
              className={`h-6 w-6 p-0 ${getToastColor(toast.type)}`}
            />
            <span className="line-clamp-3 max-w-[12.5rem] overflow-hidden px-4 text-ellipsis whitespace-normal">
              {toast.message}
            </span>
          </div>
          <Button
            variant="text"
            className="h-fit w-fit p-0"
            onClick={() => {
              setVisibleToasts((prev) => ({ ...prev, [toast.id]: false }))
              setTimeout(() => {
                dispatch(removeToast(toast.id))
                activeToastsRef.current.delete(toast.id)
              }, 500)
            }}
          >
              <Icon id="closeIcon" className={`${getToastColor(toast.type)} h-6 w-6 p-0`} />
          </Button>
        </div>
      ))}
    </div>
  )
}

export default Toast
