import { Filters } from '../../../components/molecules/filters'
import { useAppDispatch, useAppSelector } from '../../../store'
import {
  selectCurrentPage,
  selectIsLoading,
  selectPaginatedEstates,
  selectTotalPages,
} from '../../../store/estateSlice/selectors.ts'
import EstateCard from '../../../components/molecules/estate-card'
import { cn } from '../../../helpers/ui.ts'
import { useWindowDimensions } from '../../../helpers/hooks/useWindowDimensions.ts'
import Pagination from '../../../components/molecules/pagination'
import { setCurrentPage } from '../../../store/estateSlice'
import Button from '../../../components/atoms/button'
import Dropdown from '../../../components/atoms/dropdown'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MapMode } from './MapMode.tsx'
import Icon from '../../../components/atoms/icon'
import { BREAKPOINTS } from '../../../@constants'
import { Loader } from '../../../components/atoms/loader'
import { selectMode } from '../../../store/ui/selectors.ts'
import { setMode } from '../../../store/ui/modeSlice.ts'

const itemsPerPage = 9

export const EstatesList = () => {
  const { t } = useTranslation()
  const { width } = useWindowDimensions()
  const isMobile = width < BREAKPOINTS.PRE_XMD
  const [openMobileDropdown, setOpenMobileDropdown] = useState(false)
  const { mode } = useAppSelector(selectMode)
  const isLoading = useAppSelector(selectIsLoading)
  const estates = useAppSelector(selectPaginatedEstates(itemsPerPage))
  const totalPages = useAppSelector(selectTotalPages(itemsPerPage))
  const currentPage = useAppSelector(selectCurrentPage)
  const dispatch = useAppDispatch()
  const defaultModeCurrentPage = useRef(currentPage)

  const changeViewMode = () => {
    if (mode === 'map') {
      dispatch(setMode('default'))
      localStorage.setItem('mode', 'default')
      dispatch(setCurrentPage(defaultModeCurrentPage.current))
    } else {
      dispatch(setMode('map'))
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
      <div className="flex w-full gap-1.5 lg:hidden">
        <Dropdown
          label={
            openMobileDropdown
              ? t('filters.filter-state-open')
              : t('filters.filter-state-close')
          }
          open={openMobileDropdown}
          setOpen={(open) => setOpenMobileDropdown(open)}
          variant="outlined"
          triggerButtonClassName="!min-w-full text-base"
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

      <Filters className="m-0 hidden bg-transparent px-0 lg:flex">
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
          'grid w-full grid-cols-2 gap-5 pt-[1.125rem] md:grid-cols-2 lg:grid-cols-3 lg:gap-10',
          {
            '!grid-cols-1': isMobile,
            'flex w-full justify-center py-[9.375rem]':
              isLoading || !estates.length,
            'pb-[9.375rem]': estates.length <= itemsPerPage,
          }
        )}
      >
        {isLoading && <Loader />}
        {!isLoading && !estates.length && <div>{t('common.not-found')}</div>}
        {!isLoading &&
          estates.map((estate) => {
            return (
              <EstateCard
                key={estate.id}
                realEstate={estate}
                className="max-w-full"
              />
            )
          })}
      </div>

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
