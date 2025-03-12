import { cn } from '../../../helpers/ui.ts'

interface Props {
  label: string
  name: string
  value: string
  checked?: boolean
  onChange: (value: string) => void
}

const RadioButton = ({ label, name, value, checked, onChange }: Props) => {
  return (
    <label className="flex cursor-pointer items-center gap-1.5">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="hidden"
      />
      <div
        className={cn(
          'border-coral flex h-5 w-5 items-center justify-center rounded-full border-2 transition-colors'
        )}
      >
        {checked && <div className="bg-coral h-3 w-3 rounded-full" />}
      </div>
      <span className="text-charcoal">{label}</span>
    </label>
  )
}

export default RadioButton
