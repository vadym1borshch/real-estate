import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { IFilter } from './mock.ts'
import { RangeFilterInputs } from './RangeFilterInputs.tsx'
import Button from '../../atoms/button'
import { cn, textEllipsis } from '../../../helpers/ui.ts'
import DropdownInput from '../input-dropdown'
import Dropdown from '../../atoms/dropdown'
import { useNavigate } from '../../../helpers/hooks/useNavigate.ts'
import { usePathname } from '../../../helpers/hooks/usePathname.ts'
import { ROUTES } from '../../../@constants/routes.ts'
import { useQueryParams } from '../../../helpers/hooks/useQueryParams.ts'
import { useAppDispatch, useAppSelector } from '../../../store'
import { ListingType, setListingType } from '../../../store/estateSlice'
import { selectListingType } from '../../../store/estateSlice/selectors.ts'

interface Props {
  filter: IFilter
}

export const Filter = ({ filter }: Props) => {
  useQueryParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const { t, i18n } = useTranslation()
  const [query, setQuery] = useState(searchParams.get(filter.key) || '')
  const [open, setOpen] = useState(false)
  const listingType = useAppSelector(selectListingType)
  const navigate = useNavigate()
  const path = usePathname()
  const dispatch = useAppDispatch()

  const label = filter.values.find(
    (val) => typeof val !== 'number' && val.id === listingType
  )

  const getLabel = () => {
    const value = searchParams.get(filter.key)

    const item = filter.values.find(
      (v) => typeof v !== 'number' && v.id === value
    )
    if (item && typeof item !== 'number') {
      return t(item.value)
    }
    return t(filter.title)
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
    if (filter.key === 'rooms') return

    const params = new URLSearchParams(searchParams)
    let hasChanges = false

    filter.values.forEach((value) => {
      const key = filter.key
      const currentValue = searchParams.get(key)

      const translatedValue = t(value, { lng: i18n.language })

      const numericCurrentValue = Number(currentValue)
      if (
        currentValue &&
        filter.values.includes(numericCurrentValue) &&
        currentValue !== translatedValue
      ) {
        params.set(key, translatedValue)
        hasChanges = true
      }
    })

    if (hasChanges) {
      setSearchParams(params, { replace: true })
    }
  }, [filter.key, filter.values, i18n.language])

  const renderOptions = () => {
    switch (filter.key) {
      case 'price':
        return (
          <RangeFilterInputs
            iconId="euroCurrencyIcon"
            searchParams={searchParams}
            updateParams={updateParams}
            maxKey="priceMax"
            minKey="priceMin"
          />
        )
      case 'm2':
        return (
          <RangeFilterInputs
            iconId="m2Icon"
            searchParams={searchParams}
            updateParams={updateParams}
            maxKey="areaMax"
            minKey="areaMin"
          />
        )
      case 'rooms': {
        const selectedRooms = searchParams.get(filter.key)?.split('-') || []

        return filter.values.map((value) => {
          const isSelected = selectedRooms.includes(String(value))

          return (
            <Button
              key={value as unknown as string}
              className={cn('rooms-filter__button h-10 w-10', {
                'bg-blue-gray border-blue-gray text-white': isSelected,
              })}
              variant="outlined"
              selected={isSelected}
              onClick={() => {
                const newValues = isSelected
                  ? selectedRooms.filter((v) => v !== String(value))
                  : [...selectedRooms, String(value)]

                updateParams(filter.key, newValues.length ? newValues : [])
              }}
            >
              {value as number}
            </Button>
          )
        })
      }
      default:
        return filter.values.map((item) => {
          if (typeof item !== 'number') {
            return (
              <span
                key={item.id}
                className={cn('hover:bg-blue-gray px-4 py-2 text-base', {
                  'bg-coral': item.id === filter.key,
                })}
                onClick={() => {
                  if (filter.key === 'operation') {
                    dispatch(setListingType(item.id as ListingType))
                    localStorage.setItem('operation', item.id)
                    setOpen(false)
                    if (path !== ROUTES.HOME) {
                      navigate(`${item.id}`, true)
                    }
                    return
                  }
                  updateParams(filter.key, item.id)
                  setOpen(false)
                }}
              >
                {t(item.value)}
              </span>
            )
          }
          return null
        })
    }
  }

  if (filter.type === 'input') {
    return (
      <DropdownInput
        open={open}
        setOpen={setOpen}
        key={filter.id}
        inputValue={query}
        setInputValue={(value) => {
          setQuery(value)
          updateParams(filter.key, value)
        }}
        dropdownClassName="top-12"
      >
        {filter.values.map((item) => {
          if (typeof item !== 'number') {
            return (
              <span
                key={item.id}
                className="hover:bg-blue-gray px-4 py-2 text-base text-nowrap"
                onClick={() => {
                  updateParams(filter.key, item.id)
                  setQuery(item.value)
                  setOpen(false)
                }}
              >
                {item.value}
              </span>
            )
          }
          return null
        })}
      </DropdownInput>
    )
  }

  return (
    <Dropdown
      key={filter.id}
      label={
        filter.key === 'operation'
          ? typeof label !== 'number' && t(label?.value)
          : textEllipsis(getLabel(), 7)
      }
      open={open}
      setOpen={setOpen}
      variant="outlined"
      withIcon
      triggerButtonClassName="min-w-[8.25rem] w-full"
      dropdownClassName={cn(
        filter.key === 'rooms'
          ? 'flex flex-row py-3 gap-1.5 w-fit !right-0 px-4'
          : '',
        filter.key === 'price' ? '!right-0 lg:!left-0' : ''
      )}
    >
      {renderOptions()}
    </Dropdown>
  )
}
