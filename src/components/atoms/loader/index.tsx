import { cn } from '../../../helpers/ui.ts'

export const Loader = ({
  size = 50,
  color = '#33443c',
  speed = 1,
  className,
}: {
  size?: number
  color?: string
  speed?: number
  className?: string
}) => {
  return (
    <div className={cn("flex h-full w-full items-center justify-center", className)}>
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          border: `${size * 0.1}px solid ${color}40`,
          borderTopColor: color,
          borderRadius: '50%',
          animation: `spin ${speed}s linear infinite`,
        }}
      />
    </div>
  )
}
