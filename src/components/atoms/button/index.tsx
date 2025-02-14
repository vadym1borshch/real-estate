import { Button as TButton, ButtonProps } from '@material-tailwind/react'
import { cn } from '../../../helpers/ui.ts'
import { ReactNode, useState, MouseEvent } from 'react'
import Icon from '../icon'

interface Props extends ButtonProps {
  children?: ReactNode
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  size?: 'sm' | 'md'
  className?: string
  iconClassName?: string
  iconId?: string
  iconSide?: 'left' | 'right'
  variant?: 'outlined' | 'text' | 'filled',
  selected?: boolean
}

const Button = (
  {
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
        'cursor-pointer bg-coral text-xl text-white py-0 px-6 w-fit font-normal shadow-none hover:shadow-none hover:bg-light-coral focus:border-4 focus:border-charcoal rounded-sm focus:rounded-lg h-12 disabled:bg-gray',
        {
          'h-10 text-center py-0 text-base': size === 'sm',
          'bg-dark-coral hover:bg-dark-coral ': pressed,
          'bg-transparent text-charcoal hover:bg-transparent hover:text-seafoam-green px-[0.25rem] py-[0.25rem] focus:border-0': variant === 'text',
          'bg-transparent text-charcoal hover:text-charcoal hover:bg-transparent hover:border-charcoal focus:border-1  border border-blue-gray px-3': variant === 'outlined',
          'bg-charcoal text-white hover:bg-charcoal hover:text-white border-charcoal focus:border-1 focus:opacity-[1] focus:rounded-sm': variant === 'outlined' && selected
        },
        className,
      )}
      onClick={(e) => onClick(e)}
      onPointerDown={() => setPressed(true)}
      onPointerUp={() => setPressed(false)}
      onPointerLeave={() => setPressed(false)}
      {...rest}
    >
      <span className="flex capitalize gap-[0.125rem] w-full items-center justify-center">
        {children}
        {iconId && (
          <Icon id={iconId} className={cn('w-6 h-6', { 'order-first': iconSide === 'left' }, iconClassName)} />
        )}
      </span>

    </TButton>
  )
}

export default Button