import { Filter } from '../../../components/molecules/filter'
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

export const EstatesList = () => {
  const itemsPerPage = 9
  const estates = useAppSelector(selectPaginatedEstates(itemsPerPage))
  const totalPages = useAppSelector(selectTotalPages(itemsPerPage))
  const currentPage = useAppSelector(selectCurrentPage)
  const dispatch = useAppDispatch()

  const { width } = useWindowDimensions()
  const isMobile = width < BREAKPOINTS.xmd

  if (!estates.length) {
    return <div>loading...</div>
  }

  return (
    <div className="w-full max-w-[1160px] flex flex-col items-center ">
      <Filter className="bg-transparent m-0 px-0" />
      <div className={cn('grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-[1.125rem]', {
        'grid-cols-1': isMobile,
      })}>
        {estates.map((estate) => (
          <EstateCard key={estate.id} realEstate={estate} />
        ))}
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