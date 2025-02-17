import { Checkbox as TCheckbox } from '@material-tailwind/react'
import { cn } from '../../../helpers/ui.ts'

export interface CheckboxProps {
  checked: boolean
  setChecked: (value: boolean) => void
  className?: string
}

const Checkbox = ({ className, checked, setChecked }: CheckboxProps) => {
  return (
    <TCheckbox
      ripple={false}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      containerProps={{
        className: "p-0",
      }}
      className={cn('border-2 border-blue-gray rounded-[0.3125rem] w-5 h-5',
        {
          'bg-charcoal border-charcoal': checked,
        }, className)}
    />
  )

}

export default Checkbox