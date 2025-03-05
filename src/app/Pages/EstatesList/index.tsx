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
import { useState } from 'react'

export const EstatesList = () => {
  const itemsPerPage = 9
  const estates = useAppSelector(selectPaginatedEstates(itemsPerPage))
  const totalPages = useAppSelector(selectTotalPages(itemsPerPage))
  const currentPage = useAppSelector(selectCurrentPage)
  const dispatch = useAppDispatch()
  const [openMobileDropdown, setOpenMobileDropdown] = useState(false)

  const { width } = useWindowDimensions()
  const isMobile = width < BREAKPOINTS.xmd

  if (!estates.length) {
    return <div>loading...</div>
  }

  return (
    <div className="z-0 flex w-full max-w-[1160px] flex-col items-center">
      <div className="flex w-full gap-1.5 md:hidden">
        <Dropdown
          label={'Filter öffnen'}
          open={openMobileDropdown}
          setOpen={(open) => setOpenMobileDropdown(open)}
          variant="outlined"
          triggerButtonClassName="!w-full text-[16px]"
          dropdownClassName="w-[calc(100%+38px)] !min-h-[250px]"
          iconId="filterIcon"
          iconClassName="w-[24px] h-[24px] text-charcoal"
          withIcon
        >
          <Filters className="m-0 bg-transparent px-0">
            <Button className="col-span-full mx-auto w-full max-w-[420px]">
              FINDE
            </Button>
          </Filters>
        </Dropdown>
        <Button variant="outlined" className="h-12 w-12">
          M
        </Button>
      </div>

      <Filters className="m-0 hidden bg-transparent px-0 md:flex">
        <Button variant="outlined" onClick={() => {}}>
          M
        </Button>
      </Filters>
      <div
        className={cn(
          'mt-[1.125rem] grid grid-cols-2 gap-10 md:grid-cols-2 xl:grid-cols-3',
          {
            'grid-cols-1': isMobile,
          }
        )}
      >
        {estates.map((estate) => {
          return <EstateCard key={estate.id} realEstate={estate} />
        })}
      </div>
      <Pagination
        count={totalPages}
        page={currentPage}
        setPage={(page) => dispatch(setCurrentPage(page))}
        className="pt-[5.625rem] pb-[9.375rem]"
      />
    </div>
  )
}
