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
          {label && <label className="w-fit pb-1.5 pr-3">{label}</label>}
          {error && errorPosition === 'top' && (
            <span className="text-red flex items-center justify-end gap-[0.1875rem] self-end leading-4 text-center">
              <Icon id="errorIconRed" className="h-[24px] min-w-[24px] max-w-[24px]" />
              {error}
            </span>
          )}
        </div>
      )}
      <div className="relative w-full">
        <input
          ref={ref}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          className={cn(
            'border-blue-gray placeholder-gray hover:border-charcoal focus:ring-charcoal focus:border-charcoal z-10 min-h-[40px] w-full rounded-sm border px-6 autofill:shadow-[inset_0_0_0px_1000px_white] focus:ring-1 focus:outline-none md:h-12',
            { 'h-10': size === 'sm' },
            { 'border-red focus:outline-red focus:outline': error },
            { 'pl-[2.875rem]': iconSide === 'left' },
            className
          )}
          {...rest}
        />
        {iconId && (
          <span
            className={cn(
              'text-blue-gray absolute top-1/2 right-3 z-20 flex h-[24px] w-[24px] -translate-y-1/2 items-center justify-center bg-white lg:h-6 lg:w-6',
              { 'left-3': iconSide === 'left' },
              iconClassName
            )}
          >
            <Icon id={iconId} />
          </span>
        )}
      </div>

      {error && errorPosition === 'bottom' && (
        <span className="text-red flex items-center justify-end self-end leading-4 text-center">
          <Icon id="errorIconRed" className="h-[24px] min-w-[24px] max-w-[24px]"  />
          {error}
        </span>
      )}
    </div>
  )
}

export default Input
