import Icon from '../icon'
import { cn } from '../../../helpers/ui.ts'
import { ChangeEvent, HTMLProps, Ref } from 'react'

interface Props extends HTMLProps<HTMLTextAreaElement> {
  label?: string
  value: string
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  iconId?: string
  iconClassName?: string
  error?: string
  errorPosition?: 'top' | 'bottom'
  className?: string
  iconSide?: 'left' | 'right'
  rows?: number
  ref?: Ref<HTMLTextAreaElement | null>
}

const TextArea = ({
  label,
  onChange,
  placeholder,
  value,
  errorPosition = 'top',
  iconId,
  error,
  iconClassName,
  className,
  iconSide = 'right',
  ref,
  rows,
  ...rest
}: Props) => {
  return (
    <div className="relative z-0 flex w-full flex-col">
      {label && (
        <div className="flex w-full items-center justify-between">
          {label && <label className="w-fit pb-1.5">{label}</label>}
          {error && errorPosition === 'top' && (
            <span className="text-red flex items-center justify-end gap-[0.1875rem] self-end">
              <Icon id="errorIconRed" className="h-6 w-4" />
              {error}
            </span>
          )}
        </div>
      )}
      <textarea
        rows={rows || 8}
        ref={ref}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        className={cn(
          'border-blue-gray placeholder-gray hover:border-charcoal focus:ring-charcoal focus:border-charcoal z-10 h-full min-h-[13.75rem] w-full resize-none rounded-sm border px-6 py-3 focus:ring-1 focus:outline-none',
          {
            'border-red focus:outline-red focus:outline': error,
          },
          { 'pl-[2.25rem]': iconSide === 'left' },
          className
        )}
        {...rest}
      />
      {error && errorPosition === 'bottom' && (
        <span className="text-red flex items-center justify-end gap-[0.1875rem] self-end">
          <Icon id="errorIconRed" className="h-6 w-4" />
          {error}
        </span>
      )}
      {iconId && (
        <span
          className={cn(
            'text-blue-gray absolute right-3 bottom-3 z-20 flex h-6 w-6 items-center justify-center bg-white',
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

export default TextArea
