import { ReactNode, useState, useRef, useEffect } from 'react'
import Button from '../../atoms/button'
import { cn } from '../../../helpers/ui.ts'
import { useTranslation } from 'react-i18next'

interface Props {
  children?: ReactNode
  expanded?: boolean
  className?: string
  linesToShow?: number
}

export const TextExpander = ({
  children,
  expanded = false,
  className,
  linesToShow = 3,
}: Props) => {
  const [isShow, setIsShow] = useState(expanded)
  const [maxHeight, setMaxHeight] = useState<string>('0px')
  const textRef = useRef<HTMLDivElement>(null)

  const { t } = useTranslation()

  useEffect(() => {
    if (textRef.current) {
      const lineHeight = parseFloat(
        getComputedStyle(textRef.current).lineHeight
      )
      const collapsedHeight = lineHeight * linesToShow

      if (isShow) {
        setMaxHeight(`${textRef.current.scrollHeight}px`)

        setTimeout(() => {
          setMaxHeight('none')
        }, 300)
      } else {
        setMaxHeight(`${textRef.current.scrollHeight}px`)

        requestAnimationFrame(() => {
          setMaxHeight(`${collapsedHeight}px`)
        })

        setTimeout(() => {
          setIsShow(false)
        }, 300)
      }
    }
  }, [isShow, children, linesToShow])

  const showMoreHandler = () => {
    if (!isShow && textRef.current) {
      setIsShow(true)
      setMaxHeight(`${textRef.current.scrollHeight}px`)

      setTimeout(() => setMaxHeight('none'), 300)
    } else {
      if (textRef.current) {
        const lineHeight = parseFloat(
          getComputedStyle(textRef.current).lineHeight
        )
        setMaxHeight(`${textRef.current.scrollHeight}px`)

        requestAnimationFrame(() => {
          setMaxHeight(`${lineHeight * linesToShow}px`)
        })

        setTimeout(() => {
          setIsShow(false)
        }, 300)
      }
    }
  }

  if (typeof children !== 'string' || !children) {
    throw new Error('children should be a string')
  }

  return (
    <div className={className}>
      <div
        ref={textRef}
        className="text_container relative overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight }}
      >
        <span
          className="text_style relative block overflow-hidden break-words text-ellipsis"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: isShow ? 'unset' : linesToShow,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {children}
        </span>

        {!isShow && (
          <div
            className="absolute bottom-0 left-0 h-6 w-full"
            style={{
              background:
                'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))',
            }}
          />
        )}
      </div>

      <div className="button_container pt-3">
        <Button
          variant="text"
          className="text-expander-button text-coral hover:text-light-coral px-0"
          onClick={showMoreHandler}
          iconId="chevronDownIcon"
          iconClassName={cn(isShow ? 'rotate-180' : 'rotate-0')}
        >
          {isShow ? t('buttons.hide') : t('buttons.read-more')}
        </Button>
      </div>
    </div>
  )
}
