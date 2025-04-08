import { data } from './mock.ts'
import { EquipmentsType } from './EquipmentsType.tsx'

export const Equipments = () => {
  return (
    <div className="flex flex-col gap-[5.625rem]">
      {data.map((item) => (
        <EquipmentsType data={item.data} label={item.title} key={item.id} />
      ))}
    </div>
  )
}
