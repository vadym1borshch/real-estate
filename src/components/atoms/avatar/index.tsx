import { Avatar as MAvatar } from '@material-tailwind/react'
import { cn } from '../../../helpers/ui.ts'

interface Props {
  className?: string
  src?: string
  userName?: string
  userLastName?: string
  size?: number
}

const Avatar = ({
  className,
  src,
  userName,
  userLastName,
  size = 5,
}: Props) => {
  if (size > 10) {
    throw new Error('size should be less than 10')
  }

  const symbol = userName
    ? userName[0].toUpperCase() +
      (userLastName ? userLastName[0].toUpperCase() : '')
    : ''

  return (
    <>
      {src && (
        <MAvatar
          src={src}
          alt={userName}
          className={className}
          style={{
            width: `${size}rem`,
            height: `${size}rem`,
          }}
          placeholder={null}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
      )}
      {!src && (
        <div
          className={cn(
            'text-charcoal flex h-20 w-20 items-center justify-center rounded-full border text-2xl',
            className
          )}
          style={{
            width: `${size}rem`,
            height: `${size}rem`,
          }}
        >
          {symbol}
        </div>
      )}
    </>
  )
}

export default Avatar
