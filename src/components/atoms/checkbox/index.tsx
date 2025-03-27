import { Fragment } from 'react'
import { cn } from '../../../helpers/ui.ts'

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
        className={cn(
          'border-blue-gray relative flex h-5 w-5 items-center justify-center rounded-md border-[2.5px]',
          {
            'border-0 bg-[url(/public/doneBg.png)] bg-cover bg-no-repeat':
              checked,
          },
          className,
        )}
      />
    </Fragment>
  )
}

export default Checkbox
