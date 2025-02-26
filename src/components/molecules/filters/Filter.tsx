import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { IFilter } from './mock.ts'
import { RangeFilterInputs } from './RangeFilterInputs.tsx'
import Button from '../../atoms/button'
import { cn, textEllipsis } from '../../../helpers/ui.ts'
import DropdownInput from '../input-dropdown'
import Dropdown from '../../atoms/dropdown'

interface Props {
  filter: IFilter
}

export const Filter = ({ filter }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { t, i18n } = useTranslation()
  const [query, setQuery] = useState(searchParams.get(filter.key) || '')
  const [open, setOpen] = useState(false)

  const getLabel = () => {
    const value = searchParams.get(filter.key)
    const item = filter.values.find(v => v.id === value)
    return item ? t(item.value) : t(filter.title)
  }

  const updateParams = (key: string, value: string | string[]) => {
    const params = new URLSearchParams(searchParams)

    if (Array.isArray(value) && value.length) {
      params.set(key, value.join('-'))
    } else if (typeof value === 'string' && value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }

    setSearchParams(params, { replace: true })
  }

  useEffect(() => {
    setQuery(searchParams.get(filter.key) || '')
  }, [searchParams, filter.key])

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    let hasChanges = false

    filter.values.forEach(value => {
      const key = filter.key
      const currentValue = searchParams.get(key)
      const translatedValue = t(value, { lng: i18n.language })

      if (currentValue && filter.values.includes(currentValue) && currentValue !== translatedValue) {
        params.set(key, translatedValue)
        hasChanges = true
      }
    })

    if (hasChanges) {
      setSearchParams(params, { replace: true })
    }
  }, [i18n.language])

  const renderOptions = () => {
    switch (filter.key) {
      case 'price':
        return (
          <RangeFilterInputs
            iconId="euroCurrencyIcon"
            searchParams={searchParams}
            updateParams={updateParams}
            maxKey="price_max"
            minKey="price_min"
          />

        )
      case 'm2':
        return (
          <RangeFilterInputs
            iconId="m2Icon"
            searchParams={searchParams}
            updateParams={updateParams}
            maxKey="area_max"
            minKey="area_min"
          />
        )
      case 'rooms':
        const selectedRooms = searchParams.get(filter.key)?.split('-') || []

        return filter.values.map(value => {
          const isSelected = selectedRooms.includes(String(value))

          return (
            <Button
              key={value as string}
              className={cn('rooms-filter__button w-10 h-10', {
                'bg-blue-gray text-white border-blue-gray': isSelected,
              })}
              variant="outlined"
              selected={isSelected}
              onClick={() => {
                let newValues = isSelected
                  ? selectedRooms.filter(v => v !== String(value))
                  : [...selectedRooms, String(value)]

                updateParams(filter.key, newValues.length ? newValues : [])
              }}
            >
              {value}
            </Button>
          )
        })
      default:
        return filter.values.map(item => (
          <span
            key={item.id}
            className="hover:bg-blue-gray py-2 px-4 text-base"
            onClick={() => {
              updateParams(filter.key, item.id)
              setOpen(false)
            }}
          >
            {t(item.value)}
          </span>
        ))
    }
  }

  if (filter.type === 'input') {
    return (
      <DropdownInput
        open={open}
        setOpen={setOpen}
        key={filter.id}
        inputValue={query}
        setInputValue={value => {
          setQuery(value)
          updateParams(filter.key, value)
        }}
      >
        {filter.values.map(item => (
          <span
            key={item.id}
            className="hover:bg-blue-gray py-2 px-4 text-base text-nowrap"
            onClick={() => {
              updateParams(filter.key, item.id)
              setQuery(item.value)
              setOpen(false)
            }}
          >
            {item.value}
          </span>
        ))}
      </DropdownInput>
    )
  }

  return (
    <Dropdown
      key={filter.id}
      label={textEllipsis(getLabel(), 7)}
      open={open}
      setOpen={setOpen}
      variant="outlined"
      withIcon
      triggerButtonClassName="min-w-[8.25rem]"
      dropdownClassName={filter.key === 'rooms' ? 'flex flex-row py-3 gap-1.5' : ''}
    >
      {renderOptions()}
    </Dropdown>
  )
}
