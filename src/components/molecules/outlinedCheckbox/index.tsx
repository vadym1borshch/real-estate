import Checkbox, { CheckboxProps } from '../../atoms/checkbox'
import { cn } from '../../../helpers/ui.ts'

interface Props extends CheckboxProps {
  label: string
  variant?: 'text' | 'outlined'
  checkboxSide?: 'left' | 'right'
  labelClassName?: string
  containerClassName?: string
}

const OutlinedCheckbox = (
  {
    checked,
    setChecked,
    className,
    label,
    variant = 'outlined',
    checkboxSide = 'right',
    labelClassName,
    containerClassName
  }: Props) => {

  return (
    <div
      className={cn('w-full h-12 border border-blue-gray rounded-sm flex items-center px-3 justify-between cursor-pointer',
        { 'border-0': variant === 'text' },
        { 'justify-start gap-2 h-fit': checkboxSide === 'left' && variant === 'text' },
        { 'justify-start gap-2': checkboxSide === 'left' },
        containerClassName
      )}
      onClick={() => setChecked(!checked)}
    >
      <label className={cn(
        'capitalize text-charcoal cursor-pointer',
        { 'order-2 text-xs': checkboxSide === 'left' },
        labelClassName,
      )}
      >
        {label}
      </label>
      <Checkbox checked={checked} setChecked={setChecked} className={className} />
    </div>
  )
}

export default OutlinedCheckbox