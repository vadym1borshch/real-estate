import { Suspense, useEffect } from 'react'
import './App.css'
import Routes from './Routes'
import { useAppDispatch } from '../store'
import { fetchEstate } from '../store/estateSlice'

const Loading = () => <div>Loading translations...</div>

const App = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    console.log('here')
    dispatch(fetchEstate())
  }, [])
  return (
    <Suspense fallback={<Loading />}>
      <Routes />
    </Suspense>
  )
}

export default App
