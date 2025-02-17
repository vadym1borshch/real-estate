import Link from '../../atoms/link'
import buy from '/Buy.png?url'
import H2 from '../../atoms/typography/h2'
import Icon from '../../atoms/icon'
import { cn } from '../../../helpers/ui.ts'

const LinkCard = () => {
  return (
    <Link
      href={''}
      className="max-w-[16.25rem] min-h-[22.5rem] hover:border-0 focus:border-0 group"
    >
      <div className="relative w-full min-h-[22.5rem]">
          <span className="absolute right-3 top-3 flex items-center justify-center w-9 h-9 bg-white rounded-full">
           <Icon id="arrowUpRightIcon" className="w-6 h-6 text-charcoal" />
        </span>
        <img src={buy} alt="buy" className="object-cover" />
        <H2 className="absolute bottom-5 left-6 text-white" text={'LABEL'} />
        <div className={cn(
          'absolute inset-0 min-h-[22.5rem] bg-seafoam-green text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300',
        )}
        >
          descriptions
        </div>
      </div>
    </Link>
  )
}

export default LinkCard