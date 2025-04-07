import { Fragment } from 'react'
import { cn } from '../../../helpers/ui.ts'
import Icon from '../icon'

export interface CheckboxProps {
  checked: boolean
  setChecked: (value: boolean) => void
  className?: string
}

const Checkbox = ({ className, checked, setChecked }: CheckboxProps) => {
  return (
    <Fragment>
      <input
        type="checkbox"
        className="peer hidden"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <div
        role="checkbox"
        aria-checked={checked}
        className={cn('h-5 w-5', className)}
      >
        <Icon
          id={checked ? 'checkedIconId' : 'uncheckedIconId'}
          className={cn('h-5 w-5', {
            'text-charcoal': checked,
            'text-blue-gray': !checked,
          })}
        />
      </div>
    </Fragment>
  )
}

export default Checkbox
