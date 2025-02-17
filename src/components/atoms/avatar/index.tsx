import { Avatar as MAvatar } from '@material-tailwind/react'
import { cn } from '../../../helpers/ui.ts'

interface Props {
  className?: string
  src?: string
  userName: string
  size?: number
}

const Avatar = ({ className, src, userName, size = 5 }: Props) => {
  if (size > 10) {
    throw new Error('size should be less than 10')
  }

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
          VB
        </div>}
    </>
  )
}

export default Avatar