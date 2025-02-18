import { Avatar as MAvatar } from '@material-tailwind/react'
import { cn } from '../../../helpers/ui.ts'

interface Props {
  className?: string
  src?: string
  userName: string
  userLastName?: string
  size?: number
}

const Avatar = ({ className, src, userName, userLastName, size = 5 }: Props) => {
  if (size > 10) {
    throw new Error('size should be less than 10')
  }

  const symbol = userName[0].toUpperCase() + (userLastName ? userLastName[0].toUpperCase() : '')

  return (
    <>
      {src && <MAvatar
        src={src}
        alt={userName}
        className={className}
        style={{
          width: `${size}rem`,
          height: `${size}rem`,
        }}
      />}
      {!src &&
        <div
          className={cn('w-20 h-20 rounded-full text-charcoal border flex items-center justify-center text-2xl', className)}
          style={{
            width: `${size}rem`,
            height: `${size}rem`,
          }}
        >
          {symbol}
        </div>}
    </>
  )
}

export default Avatar