export const Loader = ({
  size = 50,
  color = '#33443c',
  speed = 1,
}: {
  size?: number
  color?: string
  speed?: number
}) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
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
