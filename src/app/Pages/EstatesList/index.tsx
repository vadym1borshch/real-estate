import { Filters } from '../../../components/molecules/filters'
import { useAppDispatch, useAppSelector } from '../../../store'
import {
  selectCurrentPage,
  selectPaginatedEstates,
  selectTotalPages,
} from '../../../store/estateSlice/selectors.ts'
import EstateCard from '../../../components/molecules/estate-card'
import { cn } from '../../../helpers/ui.ts'
import { useWindowDimensions } from '../../../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../../../helpers/common.ts'
import Pagination from '../../../components/molecules/pagination'
import { setCurrentPage } from '../../../store/estateSlice'
import Button from '../../../components/atoms/button'
import Dropdown from '../../../components/atoms/dropdown'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MapMode } from './MapMode.tsx'
import { useSearchContext } from '../../../contexts/SearchContext.tsx'
import Icon from '../../../components/atoms/icon'
import { useMode } from '../../../contexts/ModContext.tsx'

const itemsPerPage = 9

export const EstatesList = () => {
  const { t } = useTranslation()
  const { width } = useWindowDimensions()
  const isMobile = width < BREAKPOINTS.xmd
  const [openMobileDropdown, setOpenMobileDropdown] = useState(false)
  const { mode, setMode } = useMode()
  const {
    operation,
    address,
    type,
    rooms,
    area_min,
    price_min,
    price_max,
    area_max,
  } = useSearchContext()

  const estates = useAppSelector(
    selectPaginatedEstates(itemsPerPage, {
      rooms,
      price_max,
      price_min,
      area_min,
      address,
      type,
      area_max,
      operation,
    })
  )
  const totalPages = useAppSelector(selectTotalPages(itemsPerPage))
  const currentPage = useAppSelector(selectCurrentPage)
  const dispatch = useAppDispatch()
  const defaultModeCurrentPage = useRef(currentPage)

  const changeViewMode = () => {
    if (mode === 'map') {
      setMode('default')
      localStorage.setItem('mode', 'default')
      dispatch(setCurrentPage(defaultModeCurrentPage.current))
    } else {
      setMode('map')
      localStorage.setItem('mode', 'map')
      defaultModeCurrentPage.current = currentPage
      dispatch(setCurrentPage(1))
    }
  }

  useEffect(() => {
    return () => {
      defaultModeCurrentPage.current = 1
      dispatch(setCurrentPage(1))
    }
  }, [])

  if (mode === 'map') {
    return (
      <MapMode
        open={openMobileDropdown}
        setOpen={setOpenMobileDropdown}
        changeMode={changeViewMode}
      />
    )
  }
  return (
    <div className="z-0 flex w-full max-w-[72.5rem] flex-col items-center">
      <div className="flex w-full gap-1.5 md:hidden">
        <Dropdown
          label={
            openMobileDropdown
              ? t('filters.filter-state-open')
              : t('filters.filter-state-close')
          }
          open={openMobileDropdown}
          setOpen={(open) => setOpenMobileDropdown(open)}
          variant="outlined"
          triggerButtonClassName="!w-full text-base"
          dropdownClassName="min-w-[300px] w-[calc(100%+53px)] border border-blue-gray p-3 !min-h-[15.75rem] overflow-hidden"
          iconId="filterIcon"
          iconClassName="w-[24px] h-[24px] text-charcoal"
          withIcon
        >
          <Filters className="m-0 bg-transparent p-0">
            <Button className="col-span-full mx-auto w-full max-w-[26.25rem]">
              {t('buttons.find')}
            </Button>
          </Filters>
        </Dropdown>
        <Button
          variant="outlined"
          className="h-12 w-12"
          onClick={changeViewMode}
        >
          <Icon id="mapIcon" className="h-[24px] min-w-[24px]" />
        </Button>
      </div>

      <Filters className="m-0 hidden bg-transparent px-0 md:flex">
        <Button
          className="h-12 w-12"
          variant="outlined"
          onClick={changeViewMode}
        >
          <Icon id="mapIcon" className="h-[24px] min-w-[24px]" />
        </Button>
      </Filters>
      <div
        className={cn(
          'mt-[1.125rem] grid grid-cols-2 gap-5 lg:gap-10 md:grid-cols-2 xl:grid-cols-3',
          {
            'grid-cols-1': isMobile,
            'pb-[9.375rem]': estates.length <= itemsPerPage,
          }
        )}
      >
        {estates.map((estate) => {
          return <EstateCard key={estate.id} realEstate={estate} />
        })}
      </div>
      {!estates.length && (
        <div className="pb-[9.375rem]">Objects not found...</div>
      )}
      {estates.length > itemsPerPage && (
        <Pagination
          count={totalPages}
          page={currentPage}
          setPage={(page) => dispatch(setCurrentPage(page))}
          className="pt-[5.625rem] pb-[9.375rem]"
        />
      )}
    </div>
  )
}
