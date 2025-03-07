import { Button as TButton, ButtonProps } from '@material-tailwind/react'
import { cn } from '../../../helpers/ui.ts'
import { ReactNode, useState, MouseEvent } from 'react'
import Icon from '../icon'

interface Props extends ButtonProps {
  children: ReactNode
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
  size?: 'sm' | 'md'
  className?: string
  iconClassName?: string
  iconId?: string
  iconSide?: 'left' | 'right'
  variant?: 'outlined' | 'text' | 'filled'
  selected?: boolean
}

const Button = ({
  onClick,
  className,
  iconClassName,
  size = 'md',
  children,
  iconId,
  iconSide = 'right',
  variant = 'filled',
  selected,
  ...rest
}: Props) => {
  const [pressed, setPressed] = useState(false)

  return (
    <TButton
      ripple={false}
      className={cn(
        'bg-coral hover:bg-light-coral focus:border-charcoal !focus:py-0 disabled:bg-gray flex h-12 w-fit cursor-pointer items-center justify-center rounded-sm px-6 py-0 text-xl font-normal text-white shadow-none hover:shadow-none focus:rounded-lg focus:border-4',
        {
          'h-10 py-0 text-center text-base': size === 'sm',
          'bg-dark-coral hover:bg-dark-coral': pressed,
          'text-charcoal hover:text-seafoam-green bg-transparent px-[0.25rem] py-[0.25rem] hover:bg-transparent focus:border-0':
            variant === 'text',
          'text-charcoal hover:text-charcoal hover:border-charcoal border-blue-gray border bg-transparent px-3 hover:bg-transparent focus:rounded-sm focus:border-1':
            variant === 'outlined',
          'bg-charcoal hover:bg-charcoal border-charcoal text-white hover:text-white focus:rounded-sm focus:border-1 focus:opacity-[1]':
            variant === 'outlined' && selected,
        },
        className
      )}
      onClick={(e) => onClick && onClick(e)}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      placeholder={null}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      {...rest}
    >
      <span
        className={cn(
          'flex max-h-[48px] w-full items-center justify-between gap-[0.125rem] capitalize',
          {
            'justify-center': !iconId,
          }
        )}
      >
        {children}
        {iconId && (
          <Icon
            onClick={onClick}
            id={iconId}
            className={cn(
              'h-[24px] w-[24px] md:h-6 md:w-6',
              { 'order-first': iconSide === 'left' },
              iconClassName
            )}
          />
        )}
      </span>
    </TButton>
  )
}

export default Button
