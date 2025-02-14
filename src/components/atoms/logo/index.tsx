import dark from '/logo.png?url'
import white from '/whiteLogo.png?url'
import { cn } from '../../../helpers/ui.ts'

interface Props {
  className?: string
  variant?: 'white' | 'dark'
}

const Logo = ({ className, variant = 'dark' }: Props) => {
  return (
    <img src={variant === 'white' ? white : dark} alt="logo" className={cn('w-[3.75rem] h-[3.75rem]', className)} />
  )
}

export default Logo