import Dropdown from '../../../components/atoms/dropdown'
import { Filters } from '../../../components/molecules/filters'
import Button from '../../../components/atoms/button'
import { cn } from '../../../helpers/ui.ts'
import EstateCard from '../../../components/molecules/estate-card'
import { useTranslation } from 'react-i18next'
import { RealEstate, setCurrentPage } from '../../../store/estateSlice'
import Map from '../../../components/organisms/map'
import { useCallback, useEffect, useRef, useState } from 'react'
import { MapRef, Marker } from 'react-map-gl'
import { useAppDispatch, useAppSelector } from '../../../store'
import {
  selectCurrentPage,
  selectPaginatedEstates,
  selectTotalPages,
} from '../../../store/estateSlice/selectors.ts'
import isEqual from 'lodash.isequal'
import MapMarker from '../../../components/atoms/map-marker'
import { useWindowDimensions } from '../../../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../../../helpers/common.ts'

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
  changeMode: () => void
}

export const MapMode = ({ open, setOpen, changeMode }: Props) => {
  const { t } = useTranslation()

  const mapRef = useRef<MapRef | null>(null)
  const listContainerRef = useRef<HTMLDivElement | null>(null)
  const itemsPerPage = 5
  const dispatch = useAppDispatch()
  const totalPages = useAppSelector(selectTotalPages(itemsPerPage))
  const currentPage = useAppSelector(selectCurrentPage)
  const estates = useAppSelector(selectPaginatedEstates(itemsPerPage))
  const [loadedEstates, setLoadedEstates] = useState<RealEstate[]>([])

  const prevEstatesRef = useRef<RealEstate[]>([])

  const { width } = useWindowDimensions()
  const isMobile = width < BREAKPOINTS.md

  useEffect(() => {
    if (!isEqual(prevEstatesRef.current, estates)) {
      prevEstatesRef.current = estates

      setLoadedEstates((prev) => {
        const prevIds = new Set(prev.map((estate) => estate.id))
        const newEstates = estates.filter((estate) => !prevIds.has(estate.id))

        return newEstates.length > 0 ? [...prev, ...newEstates] : prev
      })
    }
  }, [estates])

  const handleScroll = useCallback(() => {
    if (isMobile) {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 300 &&
        currentPage < totalPages
      ) {
        dispatch(setCurrentPage(currentPage + 1))
      }
    } else if (listContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listContainerRef.current
      if (
        scrollTop + clientHeight >= scrollHeight - 50 &&
        currentPage < totalPages
      ) {
        dispatch(setCurrentPage(currentPage + 1))
      }
    }
  }, [isMobile, currentPage, totalPages, dispatch])

  useEffect(() => {
    if (isMobile) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    } else if (listContainerRef.current) {
      listContainerRef.current.addEventListener('scroll', handleScroll)
      return () =>
        listContainerRef.current?.removeEventListener('scroll', handleScroll)
    }
  }, [isMobile, handleScroll])

  return (
    <div className="z-0 flex w-full max-w-[72.5rem] flex-col items-center">
      <div className="flex w-full gap-1.5 md:hidden">
        <Dropdown
          label={
            open
              ? t('filters.filter-state-open')
              : t('filters.filter-state-close')
          }
          open={open}
          setOpen={(open) => setOpen(open)}
          variant="outlined"
          triggerButtonClassName="!w-full text-base"
          dropdownClassName="w-[calc(100%+38px)] !min-h-[15.625rem]"
          iconId="filterIcon"
          iconClassName="w-[24px] h-[24px] text-charcoal"
          withIcon
        >
          <Filters className="m-0 bg-transparent px-0">
            <Button className="col-span-full mx-auto w-full max-w-[26.25rem]">
              {t('buttons.find')}
            </Button>
          </Filters>
        </Dropdown>
        <Button variant="outlined" className="h-12 w-12" onClick={changeMode}>
          M
        </Button>
      </div>

      <Filters className="m-0 hidden bg-transparent px-0 md:flex">
        <Button className="h-12 w-12" variant="outlined" onClick={changeMode}>
          M
        </Button>
      </Filters>
      <div
        className={cn(
          'mt-[1.125rem] grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr]'
        )}
      >
        <div className="w-full">
          <Map loading={false} data={[1]} ref={mapRef} className="!h-[488px]">
            {loadedEstates.map((estate) => (
              <Marker
                key={estate.id}
                longitude={estate.address.coordinates[1]}
                latitude={estate.address.coordinates[0]}
              >
                <MapMarker limited={estate.operation.key === 'buy'} />
              </Marker>
            ))}
          </Map>
        </div>
        <div
          ref={listContainerRef}
          className="flex min-w-[22.5rem] pb-[6.25rem] flex-col gap-10 md:h-[37.5rem] md:overflow-x-hidden md:overflow-y-scroll"
        >
          {loadedEstates.map((estate) => {
            return (
              <EstateCard
                key={estate.id}
                realEstate={estate}
                className="min-w-[22.5rem]"
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
