'use client'
import { useState, ReactNode, RefObject } from 'react'
import Map, { ViewState, MapRef } from 'react-map-gl'
import { MapMouseEvent } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useDebouncedCallback } from 'use-debounce'
import { useTranslation } from 'react-i18next'


interface IMap {
  children: ReactNode
  loading: boolean
  data: unknown[]
  ref: RefObject<MapRef | null>
  onMouseEnter?: (event: MapMouseEvent) => void
  onMouseLeave?: () => void
  onClick?: (event: MapMouseEvent) => void
}

const MapWrapper = ({
  data,
  loading,
  children,
  ref,
  onClick,
  onMouseLeave,
  onMouseEnter,
}: IMap) => {
  const [viewport, setViewport] = useState<Partial<ViewState>>({
    latitude: 48.1936,
    longitude: 16.42125,
    zoom: 10,
  })

  const { t } = useTranslation()

  const onMove = useDebouncedCallback((evt) => {
    setViewport((prev) => ({
      ...prev,
      latitude: evt.viewState.latitude,
      longitude: evt.viewState.longitude,
      zoom: evt.viewState.zoom,
    }))
  }, 1)

  return (
    <div className="relative z-10 h-[230px] sm:h-[26.75rem] w-full overflow-hidden rounded-lg">
      {loading && (
        <div className="bg-light-gray absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center">
          <span>LOADING...</span>
        </div>
      )}
      {!loading && !data.length && (
        <div className="bg-light-gray absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center">
          <span>{t('common.no-data')}</span>
        </div>
      )}

      <Map
        ref={ref}
        initialViewState={viewport}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        viewState={viewport}
        // leave key for testing
        //'pk.eyJ1IjoieWlpdSIsImEiOiJjazJvMmJ3M2QwejYzM21tdWdiZzR6cmUwIn0.XolZlohi-gYoIdMoen7Gyg'
        mapboxAccessToken={"pk.eyJ1IjoieWlpdSIsImEiOiJjazJvMmJ3M2QwejYzM21tdWdiZzR6cmUwIn0.XolZlohi-gYoIdMoen7Gyg"}
        onMove={onMove}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        interactiveLayerIds={['points-layer']}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        attributionControl={false}
      >
        {children}
      </Map>
    </div>
  )
}

export default MapWrapper
