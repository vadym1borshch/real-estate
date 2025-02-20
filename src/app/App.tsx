import { Suspense, useEffect } from 'react'
import './App.css'
import Routes from './Routes'
import { useAppDispatch } from '../store'
import { fetchEstate } from '../store/estateSlice'
import { useWindowDimensions } from '../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../helpers/common.ts'

const Loading = () => <div>Loading translations...</div>

const App = () => {
  const {width} = useWindowDimensions()
  const dispatch = useAppDispatch()
  const isLowMobile = width < BREAKPOINTS.sm

  useEffect(() => {
    dispatch(fetchEstate())
  }, [])

  if (isLowMobile) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-[24px]">No develop for this screen size</div>
    )
  }

  return (
    <Suspense fallback={<Loading />}>
      <Routes />
    </Suspense>
  )
}

export default App
