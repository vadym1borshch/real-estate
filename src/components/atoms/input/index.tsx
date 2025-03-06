import { cn } from '../../../helpers/ui.ts'
import Icon from '../icon'
import { ChangeEvent, HTMLProps, Ref } from 'react'

interface Props extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
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

const Input = ({
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
    <div className="relative z-0 flex w-full flex-col">
      {label && (
        <div className="flex w-full items-center justify-between">
          {label && <label className="w-fit pb-1.5">{label}</label>}
          {error && errorPosition === 'top' && (
            <span className="text-red flex items-center justify-end gap-[0.1875rem] self-end">
              <Icon id="errorIconRed" className="h-[24px] w-[16px]" />
              {error}
            </span>
          )}
        </div>
      )}
      <input
        ref={ref}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        className={cn(
          'border-blue-gray hover:border-charcoal focus:ring-charcoal focus:border-charcoal z-10 min-h-[40px] w-full rounded-sm border px-6 autofill:shadow-[inset_0_0_0px_1000px_white] focus:ring-1 focus:outline-none md:h-12',
          { 'h-10': size === 'sm' },
          { 'border-red focus:outline-red focus:outline': error },
          { 'pl-[36px]': iconSide === 'left' },
          className
        )}
        {...rest}
      />
      {error && errorPosition === 'bottom' && (
        <span className="text-red flex items-center justify-end gap-[0.1875rem] self-end">
          <Icon id="errorIconRed" className="h-[24px] w-[16px]" />
          {error}
        </span>
      )}
      {iconId && (
        <span
          className={cn(
            'text-blue-gray absolute right-3 bottom-2 z-20 flex h-[24px] w-[24px] items-center justify-center bg-white md:bottom-3 lg:h-6 lg:w-6',
            { 'bottom-2': size === 'sm' },
            { 'left-3': iconSide === 'left' },
            iconClassName
          )}
        >
          <Icon id={iconId} />
        </span>
      )}
    </div>
  )
}

export default Input
