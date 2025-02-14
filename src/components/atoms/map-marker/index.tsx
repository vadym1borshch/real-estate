import { cn } from '../../../helpers/ui.ts'

const MapMarker = ({ limited }: { limited?: boolean }) => {
  return (
    <div className={cn("flex items-center justify-center h-8 w-8 rounded-full bg-[#ABC0B680]", {
      'bg-[#FA9B7E80]': limited
    })}>
      <span className={cn("h-[0.75rem] w-[0.75rem] rounded-full bg-jungle-green", {
        'bg-coral': limited
      })} />
    </div>
  )
}
export default MapMarker