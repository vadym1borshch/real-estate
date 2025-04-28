import { PropsWithChildren, useCallback, useEffect, useRef } from 'react'

interface Props extends PropsWithChildren {
  onClickOutside: () => void
  className?: string
}

export const ClickOutsideWrapper = ({
  children,
  onClickOutside,
  className,
}: Props) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        onClickOutside()
      }
    },
    [onClickOutside]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  )
}
