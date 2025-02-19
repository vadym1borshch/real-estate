interface Props {
  label: string
  filters: string[]
}

export const OperationFilter = ({ label, filters }: Props) => {
  return (
    <div className="flex items-center w-full justify-center gap-6">
      <label>{label}:</label>
      <div className="flex items-center gap-6">
        {filters.map((filter) => (
          <span key={filter}>{filter}</span>
        ))}
      </div>
    </div>
  )
}