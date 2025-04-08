import Button from '../../atoms/button'
import { cn } from '../../../helpers/ui.ts'
import Icon from '../../atoms/icon'
import { useWindowDimensions } from '../../../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../../../@constants'

interface Props {
  handleNext: () => void
  handlePrev: () => void
}

export const ButtonsBlock = ({ handleNext, handlePrev }: Props) => {
  const { width: windowWidth } = useWindowDimensions()
  const isLarge = windowWidth <= BREAKPOINTS.LG
  return (
    <>
      <Button
        variant="outlined"
        className={cn(
          'absolute top-1/2 left-3 p-0 -translate-y-1/2 transform !rounded-full !border-transparent',
          {
            'h-12 w-12 !border-white left-6': !isLarge,
          }
        )}
        onClick={handlePrev}
      >
        <Icon
          id={isLarge ? 'arrowLeftRoundedIcon' : 'chevronDownIcon'}
          className={cn('h-6 w-6 text-white', {
            'rotate-90': !isLarge,
          })}
          onClick={handlePrev}
        />
      </Button>
      <Button
        variant="outlined"
        className={cn(
          'absolute top-1/2 right-3 p-0 -translate-y-1/2 transform !rounded-full !border-transparent',
          {
            'h-12 w-12 !border-white right-6': !isLarge,
          }
        )}
        onClick={handleNext}
      >
        <Icon
          id={isLarge ? 'arrowLeftRoundedIcon' : 'chevronDownIcon'}
          className={cn('h-6 w-6 rotate-180 text-white', {
            '-rotate-90': !isLarge,
          })}
          onClick={handleNext}
        />
      </Button>
    </>
  )
}
