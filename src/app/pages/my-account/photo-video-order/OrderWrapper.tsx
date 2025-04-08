interface Props {
  title: string
  min: string
  standard: string
  large: string
}

export const OrderWrapper = ({ title, min, standard, large }: Props) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      <span className="bg-charcoal px-3 py-1.5 text-white rounded-sm">{title}</span>
      <span className="bg-light-gray2 px-3 py-1.5 rounded-sm">{min}</span>
      <span className="bg-light-gray2 px-3 py-1.5 rounded-sm">{standard}</span>
      <span className="bg-light-gray2 px-3 py-1.5 rounded-sm">{large}</span>
    </div>
  )
}
