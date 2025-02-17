import { Suspense } from 'react'
import './App.css'
import Routes from './Routes'

const Loading = () => <div>Loading translations...</div>

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes />
    </Suspense>
  )
}

export default App
