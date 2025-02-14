import { Checkbox as TCheckbox } from '@material-tailwind/react'
import { cn } from '../../../helpers/ui.ts'

interface Props {
  checked: boolean
  setChecked: (value: boolean) => void
  className?: string
}

const Checkbox = ({ className, checked, setChecked }: Props) => {
  return (
    <TCheckbox
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      className={cn('border-2 border-blue-gray rounded-[0.3125rem]',
        {
          'bg-charcoal border-charcoal': checked,
        }, className)}
    />
  )

}

export default Checkbox