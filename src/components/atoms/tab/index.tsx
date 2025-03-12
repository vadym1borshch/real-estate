import Button from '../button'
import { cn } from '../../../helpers/ui.ts'

interface Props {
  label?: string
  selected?: boolean
  onClick?: () => void
}

const Tab = ({ label, selected, onClick }: Props) => {
  return (
    <Button
      size="sm"
      onClick={() => {
        if (onClick) onClick()
      }}
      variant="outlined"
      iconSide="left"
      className={cn(
        'border-charcoal hover:border-seafoam-green hover:text-seafoam-green rounded-[6.25rem] focus:rounded-[6.25rem]',
        {
          'bg-charcoal hover:bg-charcoal hover:border-charcoal text-white hover:text-white focus:opacity-[1]':
            selected,
        }
      )}
    >
      {label}
    </Button>
  )
}

export default Tab
