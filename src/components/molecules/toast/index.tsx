import { useEffect, useState, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store'
import { selectToast } from '../../../store/toastSlise/selectors'
import { removeToast } from '../../../store/toastSlise'
import Button from '../../atoms/button'
import {  getToastColor } from './helper'
import { cn } from '../../../helpers/ui.ts'

type PositionType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
type HiddenTime = 3000 | 5000 | 10000 | 15000

interface IToast {
  position?: PositionType
  hiddenTime?: HiddenTime
}

const Toast = ({ position = 'bottom-right', hiddenTime = 10000 }: IToast) => {
  const toasts = useAppSelector(selectToast)
  const dispatch = useAppDispatch()
  const [visibleToasts, setVisibleToasts] = useState<{ [key: number]: boolean }>({})
  const activeToastsRef = useRef(new Set<number>())

  const positionClasses = {
    'top-left': 'top-5 left-5 items-start',
    'top-right': 'top-5 right-5 items-end',
    'bottom-left': 'bottom-5 left-5 items-start',
    'bottom-right': 'bottom-5 right-5 items-end'
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
        setTimeout(() => {
          setVisibleToasts((prev) => ({ ...prev, [toast.id]: false }))
          setTimeout(() => {
            dispatch(removeToast(toast.id))
            activeToastsRef.current.delete(toast.id)
          }, 500)
        }, hiddenTime + i * 500)
      })
    }

    closeToastsSequentially()
  }, [toasts, dispatch, hiddenTime])

  return (
    <div className={cn('fixed flex flex-col-reverse z-50 gap-2', positionClasses[position])}>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            'relative bg-jungle-green min-w-[250px] max-w-[300px] p-4 rounded-lg flex justify-between items-start text-sm overflow-hidden transition-all duration-500 ease-in-out',
            visibleToasts[toast.id]
              ? 'translate-x-0 opacity-100'
              : position.includes('right')
                ? 'translate-x-full opacity-0'
                : '-translate-x-full opacity-0',
            getToastColor(toast.type, 0.1),
            `border-2 ${getToastColor(toast.type, 0.5)}`
          )}
        >
          <div className="flex items-center">
            Icon
           {/* <Icon
              icon={getIcon(toast.type)}
              className={cn('w-12 h-12', getToastTextColor(toast.type), {
                'rotate-180': toast.type === 'info'
              })}
            />*/}
            <span className="overflow-hidden text-ellipsis whitespace-normal px-4 line-clamp-3">
              {toast.message}
            </span>
          </div>
          <Button
            className="w-10 h-10 p-2"
            onClick={() => {
              setVisibleToasts((prev) => ({ ...prev, [toast.id]: false }))
              setTimeout(() => {
                dispatch(removeToast(toast.id))
                activeToastsRef.current.delete(toast.id)
              }, 500)
            }}
          >
           x {/*<Icon icon={cross} className={cn(getToastTextColor(toast.type))} />*/}
          </Button>
        </div>
      ))}
    </div>
  )
}

export default Toast
