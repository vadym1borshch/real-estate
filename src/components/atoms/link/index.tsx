import { Link as RLink } from 'react-router-dom'
import Icon from '../icon'
import { cn } from '../../../helpers/ui.ts'
import { HTMLAttributes, ReactNode, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface Props extends HTMLAttributes<HTMLLinkElement> {
  href: string
  children: ReactNode
  iconId?: string
  className?: string
  iconClassName?: string
  disabled?: boolean
  onClick?: () => void
}

const Link = ({
  href,
  children,
  iconId,
  iconClassName,
  disabled,
  className,
  onClick,
  ...rest
}: Props) => {
  const { i18n } = useTranslation()
  const [pressed, setPressed] = useState(false)
  const link = disabled ? '#' : `/${i18n.language}/${href}`

  return (
    <RLink
      to={link as string}
      className={cn(
        'text-charcoal hover:text-seafoam-green focus:border-seafoam-green flex items-center gap-1.5 focus:rounded-sm focus:border-4 focus:outline-none',
        {
          'text-charcoal hover:text-charcoal focus:border-0': pressed,
          'text-gray hover:text-gray focus:border-0': disabled,
        },
        className
      )}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      onPointerDown={() => setPressed(true)}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      onPointerUp={() => setPressed(false)}
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      onPointerLeave={() => setPressed(false)}
      onClick={(e) => {
        if (onClick) {
          onClick()
        }
        if (disabled) {
          e.preventDefault()
          e.stopPropagation()
        }
      }}
      {...rest}
    >
      {iconId && (
        <Icon id={iconId} className={cn('h-6 w-6', iconClassName)} />
      )}
      {children}
    </RLink>
  )
}

export default Link
