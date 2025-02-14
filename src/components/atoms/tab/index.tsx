import Button from '../button'
import { cn } from '../../../helpers/ui.ts'

interface Props {
  label?: string
  selected?: boolean
}

const Tab = ({ label, selected }: Props) => {
  return (
    <Button
      size="sm"
      onClick={() => {
      }}
      variant="outlined"
      iconSide="left"
      className={cn(
        'rounded-[6.25rem] border-charcoal hover:border-seafoam-green hover:text-seafoam-green focus:rounded-[6.25rem]',
        { 'bg-charcoal text-white hover:text-white hover:bg-charcoal hover:border-charcoal focus:opacity-[1]': selected },
      )}
    >
      {label}
    </Button>
  )
}

export default Tab