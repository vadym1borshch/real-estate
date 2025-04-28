interface Props {
  title: string
  min: string
  standard: string
  large: string
}

export const OrderWrapper = ({ title, min, standard, large }: Props) => {
  return (
    <div className="flex w-full flex-col gap-1.5">
      <span className="bg-charcoal rounded-sm px-3 py-1.5 text-white">
        {title}
      </span>
      <span className="bg-light-gray2 rounded-sm px-3 py-1.5">{min}</span>
      <span className="bg-light-gray2 rounded-sm px-3 py-1.5">{standard}</span>
      <span className="bg-light-gray2 rounded-sm px-3 py-1.5">{large}</span>
    </div>
  )
}
