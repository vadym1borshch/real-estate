import Button from '../../atoms/button'
import { cn } from '../../../helpers/ui.ts'
import { DropdownMenu } from '../../atoms/dropdown/Menu.tsx'
import DropdownV2 from '../../atoms/dropdown/indexV2.tsx'
import { useAppDispatch, useAppSelector } from '../../../store'
import { selectFilters, selectOpenFilter } from '../../../store/findFilterSlice/selectors.ts'
import { setFilterValue, setOpenFilter } from '../../../store/findFilterSlice'
import { useState } from 'react'

interface Props {
  className?: string,
}

export const Filter = ({ className }: Props) => {
  const filters = useAppSelector(selectFilters)
  const dispatch = useAppDispatch()
  const openFilter = useAppSelector(selectOpenFilter)
  const [query, setQuery] = useState<string>('')

  console.log(filters)

  const handleOpenFilter = (id: string) => {
    if (id === openFilter) {
      dispatch(setOpenFilter(null))
      return
    }
    dispatch(setOpenFilter(id))
  }


  return (
    <div

      className={cn('p-3 backdrop-blur-[20px] rounded-md w-full flex gap-3 flex-wrap lg:flex-nowrap justify-center', className)}>
      {filters.map((filter) => {
        if (filter.type === 'input') {
          return (
            <DropdownV2
              inputValue={query}
              key={filter.id}
              label={filter.title.label}
              triggerAs={filter.type}
              open={filter.id === openFilter}
              setInputValue={(value) => {
                setQuery(value)
                dispatch(setFilterValue({ value: value, id: filter.id }))
              }}
              setOpen={() => {
                handleOpenFilter(filter.id)
              }}
              variant="outlined"
              triggerButtonClassName="w-full px-3"
            >
              <DropdownMenu list={filter.values} id={filter.id} setValue={(value) => setQuery(value)} />
            </DropdownV2>
          )
        }
        return (
          <DropdownV2
            key={filter.id}
            label={filter.title.label}
            open={filter.id === openFilter}
            setOpen={() => handleOpenFilter(filter.id)}
            variant="outlined"
            withIcon
            triggerButtonClassName="min-w-[132px]"
          >
            {filter.title.key !== 'm2' && filter.title.key !== 'price' && filter.title.key !== 'rooms' &&
              <DropdownMenu list={filter.values} id={filter.id} />}
            {filter.title.key === 'price' && (<div>inputs</div>)}
            {filter.title.key === 'm2' && (<div>inputs</div>)}
            {filter.title.key === 'rooms' && <div className="flex gap-1.5" onClick={(e) => e.stopPropagation()}>
              {filter.values.map((value) => {
                return (
                  <Button
                    key={value}
                    className="rooms-filter__button w-10 h-10 "
                    variant="outlined"
                    selected={filter.currentValue.includes(value)}
                    onClick={() => {
                      dispatch(setFilterValue({ value: value, id: filter.id }))
                    }}>
                    {value}
                  </Button>
                )
              })}
            </div>}
          </DropdownV2>
        )
      })}
      <Button
        onClick={() => {
        }}
      >
        Finde
      </Button>
    </div>
  )
}