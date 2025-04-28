import Checkbox, { CheckboxProps } from '../../atoms/checkbox'
import { cn } from '../../../helpers/ui.ts'

interface Props extends CheckboxProps {
  label: string
  variant?: 'text' | 'outlined'
  checkboxSide?: 'left' | 'right'
  labelClassName?: string
  containerClassName?: string
}

const OutlinedCheckbox = ({
  checked,
  setChecked,
  className,
  label,
  variant = 'outlined',
  checkboxSide = 'right',
  labelClassName,
  containerClassName,
}: Props) => {
  return (
    <div
      className={cn(
        'border-blue-gray flex h-12 w-full cursor-pointer items-center justify-between rounded-sm border px-3',
        { 'border-0': variant === 'text' },
        {
          'h-fit justify-start gap-2':
            checkboxSide === 'left' && variant === 'text',
        },
        { 'justify-start gap-2': checkboxSide === 'left' },
        containerClassName
      )}
      onClick={() => setChecked(!checked)}
    >
      <label
        className={cn(
          'text-charcoal cursor-pointer capitalize',
          { 'order-2 text-xs': checkboxSide === 'left' },
          labelClassName
        )}
      >
        {label}
      </label>
      <Checkbox
        checked={checked}
        setChecked={setChecked}
        className={className}
      />
    </div>
  )
}

export default OutlinedCheckbox
