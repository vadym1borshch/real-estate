import Link from '../../atoms/link'
import H2 from '../../atoms/typography/h2'
import Icon from '../../atoms/icon'
import { cn } from '../../../helpers/ui.ts'
import { useRef, useState } from 'react'

interface Props {
  src: string
  label: string
  descriptions: string
  href?: string
}

const LinkCard = ({ src, descriptions, label, href = '/estates' }: Props) => {
  const [isLongPressed, setIsLongPressed] = useState(false)
  const pressTimer = useRef<number | null>(null)
  const handleTouchStart = () => {
    pressTimer.current = setTimeout(() => {
      setIsLongPressed(true)
    }, 150)
  }

  const handleTouchEnd = () => {
    if (pressTimer.current) {
      clearTimeout(pressTimer.current)
    }
    setIsLongPressed(false)
  }
  return (
    <Link
      href={href}
      className="group min-h-[22.5rem] max-w-[16.25rem] hover:border-0 focus:border-0"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchMove={handleTouchEnd}
    >
      <div className="relative min-h-[22.5rem] w-full">
        <span className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white">
          <Icon
            id="arrowUpRightIcon"
            className="text-charcoal h-[24px] w-[24px] lg:h-6 lg:w-6"
          />
        </span>
        <img src={src} alt="buy" className="object-cover" />
        <H2 className="absolute bottom-5 left-6 text-white" text={label} />
        <div
          className={cn(
            'bg-seafoam-green absolute inset-0 min-h-[22.5rem] rounded-lg px-6 py-5 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100',
            { 'opacity-100': isLongPressed }
          )}
        >
          {descriptions}
        </div>
      </div>
    </Link>
  )
}

export default LinkCard
