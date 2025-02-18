import { Link as RLink, useParams } from 'react-router-dom'
import Icon from '../icon'
import { cn } from '../../../helpers/ui.ts'
import { HTMLAttributes, ReactNode, useState } from 'react'

interface Props extends HTMLAttributes<HTMLLinkElement> {
  href: string;
  children: ReactNode;
  iconId?: string;
  className?: string;
  iconClassName?: string;
  disabled?: boolean;
}

const Link = ({ href, children, iconId, iconClassName, disabled, className, ...rest }: Props) => {
  const { lang } = useParams()
  const [pressed, setPressed] = useState(false)
  const link = disabled ? undefined : `/${lang}${href}`

  return (
    <RLink
      to={link as string}
      className={cn('text-charcoal flex items-center gap-1.5 hover:text-seafoam-green focus:outline-none focus:rounded-sm focus:border-4 focus:border-seafoam-green',
        {
          'text-charcoal hover:text-charcoal focus:border-0': pressed,
          'text-gray hover:text-gray focus:border-0': disabled,
        },
        className,
      )}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      {...rest}
    >
      {iconId && <Icon id={iconId} className={cn('h-6 w-6', iconClassName)} />}
      {children}
    </RLink>)
}

export default Link