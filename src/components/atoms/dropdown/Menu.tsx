import { useAppDispatch } from '../../../store'
import { setFilterValue } from '../../../store/findFilterSlice'

interface Props {
  list: string[]
  id: string
  setValue?: (value: string) => void
}

export const DropdownMenu = ({ list, id, setValue }: Props) => {

  const dispatch = useAppDispatch()

  return (
    <div className="w-full flex flex-col ">
      {list.map((item, idx) => (
        <span
          key={`${item}` + `${idx}`}
          className="hover:bg-blue-gray py-2 px-4 text-base"
          onClick={() => {
            dispatch(setFilterValue({value: item, id}))
            setValue && setValue(item)
          }}
        >
          {item}
        </span>
      ))}
    </div>
  )
}