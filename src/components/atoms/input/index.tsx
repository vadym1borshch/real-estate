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
}

const Input = ({ label, size = 'md', onChange, placeholder, value, iconId, error, iconClassName }: Props) => {
  return (
    <div className="w-full relative flex flex-col z-0">
      <div className="flex w-full items-center justify-between">
        {label && <label className="pb-1.5">{label}</label>}
        {error && <span className=" flex items-center gap-[0.1875rem] text-red self-end">
          <Icon
            id="errorIconRed"
            className="w-4 h-6"
          />
          {error}
        </span>}
      </div>
      <input
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        className={cn('z-10 w-full h-12 border border-blue-gray px-6 rounded-sm  focus:border-0 focus:outline-charcoal',
          { 'h-10': size === 'sm' },
          { 'border-red focus:outline focus:outline-1 focus:outline-red': error },
        )}
      />
      {iconId && <span className={cn('z-20 bg-white w-6 h-6 absolute bottom-3 right-3 text-blue-gray',
        { 'bottom-2': size === 'sm' },
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