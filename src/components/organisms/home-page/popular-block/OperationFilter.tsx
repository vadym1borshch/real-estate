import { useTranslation } from 'react-i18next'
import { cn } from '../../../../helpers/ui.ts'
import { useAppDispatch, useAppSelector } from '../../../../store'
import { selectBuyFilter, selectRentFilter } from '../../../../store/estateSlice/selectors.ts'
import { setBuyFilter, setRentFilter } from '../../../../store/estateSlice'
import { FilterOption } from './mock.ts'

interface Props {
  label: string
  filters: FilterOption[]
}

export const OperationFilter = ({ label, filters }: Props) => {
  const { t } = useTranslation()
  const buyFilter = useAppSelector(selectBuyFilter)
  const rentFilter = useAppSelector(selectRentFilter)
  const dispatch = useAppDispatch()

  const currentFilter = label === t('real-estate.operations.buy') ? buyFilter : rentFilter

  const setFilterHandler = (filter: FilterOption) => {
    if (label === t('real-estate.operations.buy')) {
      dispatch(setBuyFilter({ filter }))
      return
    }
    dispatch(setRentFilter({ filter }))
  }

  return (
    <div className="flex w-full gap-6 max-w-[300px] md:max-w-full md:justify-center">
      <div className="flex items-center justify-center gap-6 flex-wrap md:justify-start md:flex-nowrap">
        <label>{label}:</label>
        {filters.map((filter) => {
          const initFilter = filter.key === currentFilter.key
          return (
            <span
              onClick={() => setFilterHandler(filter)}
              className={cn('text-nowrap cursor-pointer hover:text-blue-gray transition-hover duration-300', {
                'underline': initFilter,
              })}
              key={filter.key}
            >
              {t(filter.title)}
            </span>
          )
        })}
      </div>
    </div>
  )
}