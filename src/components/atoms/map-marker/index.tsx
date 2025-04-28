import { cn } from '../../../helpers/ui.ts'

const MapMarker = ({ limited }: { limited?: boolean }) => {
  return (
    <div
      className={cn(
        'flex h-8 w-8 items-center justify-center rounded-full bg-[#ABC0B680]',
        {
          'bg-[#FA9B7E80]': limited,
        }
      )}
    >
      <span
        className={cn('bg-jungle-green h-[0.75rem] w-[0.75rem] rounded-full', {
          'bg-coral': limited,
        })}
      />
    </div>
  )
}
export default MapMarker
