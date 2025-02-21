import { cn } from '../../../helpers/ui.ts'
import Icon from '../icon'
import { ChangeEvent } from 'react'

interface Props {
  label?: string
  value: string
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  size?: 'sm' | 'md'
  iconId?: string
  iconClassName?: string
  error?: string
  className?: string
  iconSide?: 'left' | 'right'
}

const Input = ({ label, size = 'md', onChange, placeholder, value, iconId, error, iconClassName, className, iconSide = 'right', ...rest }: Props) => {
  return (
    <div className="relative w-full flex flex-col z-0">
      {label && <div className="flex items-center justify-between">
        {label && <label className="pb-1.5">{label}</label>}
        {error && <span className=" flex w-full items-center gap-[0.1875rem] text-red self-end justify-end">
          <Icon
            id="errorIconRed"
            className="w-4 h-6"
          />
          {error}
        </span>}
      </div>}
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        className={cn('z-10 w-full min-h-[40px]o md:h-12 border border-blue-gray hover:border-charcoal px-6 rounded-sm focus:outline-none focus:ring-1 focus:ring-charcoal focus:border-charcoal',
          { 'h-10': size === 'sm' },
          { 'border-red focus:outline focus:outline-1 focus:outline-red': error },
          { 'pl-[36px]': iconSide === 'left' },
          className
        )}
        {...rest}
      />
      {iconId && <span className={cn('z-20 bg-white h-[24px] w-[24px] lg:w-6 lg:h-6 absolute bottom-3 right-3 text-blue-gray',
        { 'bottom-2': size === 'sm' },
        { 'left-3': iconSide === 'left' },
        iconClassName,
      )}>
        <Icon id={iconId}
        />
      </span>
      }
    </div>
  )
}

export default Input