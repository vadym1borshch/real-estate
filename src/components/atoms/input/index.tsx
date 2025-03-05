import { cn } from '../../../helpers/ui.ts'
import Icon from '../icon'
import { ChangeEvent, Ref } from 'react'

interface Props {
  label?: string
  value: string
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  size?: 'sm' | 'md'
  iconId?: string
  iconClassName?: string
  error?: string
  errorPosition?: 'top' | 'bottom'
  className?: string
  iconSide?: 'left' | 'right'
  ref?: Ref<HTMLInputElement | null>
}

const Input = (
  {
    label,
    size = 'md',
    onChange,
    placeholder,
    value,
    iconId,
    error,
    errorPosition = 'top',
    iconClassName,
    className,
    iconSide = 'right',
    ref,
    ...rest
  }: Props) => {
  return (
    <div className="relative w-full flex flex-col z-0">
      {label &&
        (<div className="flex items-center justify-between w-full">
          {label && <label className="pb-1.5 w-fit">{label}</label>}
          {error && errorPosition === 'top' &&
            <span className=" flex  items-center gap-[0.1875rem] text-red self-end justify-end">
            <Icon
              id="errorIconRed"
              className="w-[16px] h-[24px]"
            />
              {error}
          </span>
          }
        </div>)
      }
      <input
        ref={ref}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        className={cn('z-10 w-full min-h-[40px] md:h-12 border border-blue-gray hover:border-charcoal px-6 rounded-sm focus:outline-none focus:ring-1 focus:ring-charcoal focus:border-charcoal autofill:shadow-[inset_0_0_0px_1000px_white]',
          { 'h-10': size === 'sm' },
          { 'border-red focus:outline focus:outline-1 focus:outline-red': error },
          { 'pl-[36px]': iconSide === 'left' },
          className,
        )}
        {...rest}
      />
      {error && errorPosition === 'bottom' &&
        <span className=" flex  items-center gap-[0.1875rem] text-red self-end justify-end">
          <Icon
            id="errorIconRed"
            className="w-[16px] h-[24px]"
          />
          {error}
        </span>
      }
      {iconId && <span
        className={cn('z-20 bg-white h-[24px] w-[24px] lg:w-6 lg:h-6 absolute  bottom-2 md:bottom-3  right-3 text-blue-gray flex items-center justify-center',
          { 'bottom-2': size === 'sm' },
          { 'left-3': iconSide === 'left' },
          iconClassName,
        )}>
        <Icon id={iconId} />
      </span>
      }
    </div>
  )
}

export default Input