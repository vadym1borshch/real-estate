import Dropdown from '../../../components/atoms/dropdown'
import { Filters } from '../../../components/molecules/filters'
import Button from '../../../components/atoms/button'
import { cn } from '../../../helpers/ui.ts'
import EstateCard from '../../../components/molecules/estate-card'
import { useTranslation } from 'react-i18next'
import { setCurrentPage } from '../../../store/estateSlice'
import Map from '../../../components/organisms/map'
import { useCallback, useEffect, useRef, useState } from 'react'
import { MapRef, Marker } from 'react-map-gl'
import { useAppDispatch, useAppSelector } from '../../../store'
import {
  selectCurrentPage,
  selectFilters,
  selectIsLoading,
  selectPaginatedEstates,
  selectTotalPages,
} from '../../../store/estateSlice/selectors.ts'
import MapMarker from '../../../components/atoms/map-marker'
import { useWindowDimensions } from '../../../helpers/hooks/useWindowDimensions.ts'
import Icon from '../../../components/atoms/icon'
import { BREAKPOINTS } from '../../../@constants'
import { Loader } from '../../../components/atoms/loader'
import { selectMode } from '../../../store/ui/selectors.ts'
import { scrollToPageBlock } from './estate-details/helpers.ts'

interface Props {
  open: boolean
  setOpen: (open: boolean) => void
  changeMode: () => void
}

const itemsPerPage = 5

export const MapMode = ({ open, setOpen, changeMode }: Props) => {
  const { t } = useTranslation()

  const mapRef = useRef<MapRef | null>(null)
  const listContainerRef = useRef<HTMLDivElement | null>(null)
  const { mode } = useAppSelector(selectMode)
  const [currentEstateId, setCurrentEstateId] = useState<string | null>(null)

  const dispatch = useAppDispatch()
  const totalPages = useAppSelector(selectTotalPages(itemsPerPage))
  const currentPage = useAppSelector(selectCurrentPage)
  const filters = useAppSelector(selectFilters)
  const isLoading = useAppSelector(selectIsLoading)
  const estates = useAppSelector(selectPaginatedEstates(itemsPerPage))

  const { width } = useWindowDimensions()
  const isMobile = width < BREAKPOINTS.MD
  const isMedium = width >= BREAKPOINTS.PRE_XMD

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
    dispatch(setCurrentPage(1))
  }, [filters])

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
      <div className="flex w-full gap-1.5 lg:hidden">
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
          dropdownClassName="min-w-[18.75rem] w-[calc(100%+53px)] border border-blue-gray p-3 !min-h-[15.75rem] overflow-hidden"
          iconId="filterIcon"
          iconClassName="w-6 h-6 text-charcoal"
          withIcon
        >
          <Filters className="m-0 bg-transparent p-0">
            <Button className="col-span-full mx-auto w-full max-w-[26.25rem]">
              {t('buttons.find')}
            </Button>
          </Filters>
        </Dropdown>
        <Button variant="outlined" className="h-12 w-12" onClick={changeMode}>
          <Icon id="menuGridIcon" className="h-6 min-w-6" />
        </Button>
      </div>

      <Filters className="m-0 hidden bg-transparent px-0 lg:flex">
        <Button className="h-12 w-12" variant="outlined" onClick={changeMode}>
          <Icon id="menuGridIcon" className="h-6 min-w-6" />
        </Button>
      </Filters>
      <div
        className={cn(
          'mt-5 grid w-full grid-cols-1 gap-5 gap-x-3 md:grid-cols-[2fr_1fr]'
        )}
      >
        <div className="w-full">
          <Map loading={false} data={[1]} ref={mapRef} className="!h-[30.5rem]">
            {estates.map((estate) => (
              <Marker
                key={estate.id}
                longitude={estate.addressLng}
                latitude={estate.addressLat}
                onClick={() => {
                  scrollToPageBlock(estate.id, listContainerRef.current)
                  setCurrentEstateId(estate.id)
                }}
              >
                <MapMarker limited={estate.operationKey === 'buy'} />
              </Marker>
            ))}
          </Map>
        </div>
        <div
          ref={listContainerRef}
          className={cn(
            'grid w-full !min-w-[19.6875rem] grid-cols-1 gap-5 pb-[6.25rem] md:h-[37.5rem] md:overflow-x-hidden md:overflow-y-auto lg:gap-10',
            {
              'grid-cols-2': isMedium && mode !== 'map',
              'flex w-full items-center justify-center':
                isLoading || !estates.length,
            }
          )}
        >
          {isLoading && <Loader />}
          {!isLoading && !estates.length && <div>{t('common.not-found')}</div>}
          {estates.map((estate) => {
            return (
              <EstateCard
                key={estate.id}
                realEstate={estate}
                className={cn('max-w-full lg:mr-3', {
                  'border-coral !min-h-[27rem] rounded-lg border-2':
                    currentEstateId === estate.id,
                })}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
