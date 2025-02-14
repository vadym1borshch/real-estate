import { IconButton as TIconButton, IconButtonProps } from '@material-tailwind/react'
import { ReactNode } from 'react'
import { cn } from '../../../helpers/ui.ts'

interface Props extends IconButtonProps {
  children: string
  onClick: () => void;
  className?: string;
  text?: ReactNode;
  variant?: 'text' | 'outlined' | 'filled'
}

const IconButton = ({ children, text, onClick, className, variant = 'filled', ...rest }: Props) => {
  return (
    <TIconButton
      onClick={onClick}
      className={cn('bg-coral cursor-pointer flex items-center w-auto justify-center shadow-none hover:shadow-none', {},
        { 'bg-transparent': variant === 'text' },
        {
          'bg-transparent border-charcoal border-[1px]': variant === 'outlined',
        },
        {
          '& span': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        },
        className,
      )}
      {...rest}
    >
      {children}
    </TIconButton>
  )
}

export default IconButton
