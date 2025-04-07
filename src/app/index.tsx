import { Suspense, useEffect } from 'react'
import Routes from './routes'
import { useAppDispatch } from '../store'
import { fetchEstate } from '../store/estateSlice'
import { useWindowDimensions } from '../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../@constants'


const Loading = () => <div>Loading translations...</div>

const App = () => {
  const {width} = useWindowDimensions()
  const dispatch = useAppDispatch()
  const isLowMobile = width < BREAKPOINTS.SM

  useEffect(() => {
    dispatch(fetchEstate())
  }, [])

  useEffect(() => {
    const metaViewport = document.querySelector('meta[name="viewport"]')

    const originalContent = metaViewport?.getAttribute('content')

    const resetViewport = () => {
      if (metaViewport) {
        metaViewport.setAttribute(
          'content',
          'width=device-width, initial-scale=1, maximum-scale=1'
        )
      }
    }

    const onFocus = () => {

    }

    const onBlur = () => {
      setTimeout(() => {
        resetViewport()
      }, 300)
    }

    const inputs = document.querySelectorAll('input, textarea, select')
    inputs.forEach((el) => {
      el.addEventListener('focus', onFocus)
      el.addEventListener('blur', onBlur)
    })

    return () => {
      inputs.forEach((el) => {
        el.removeEventListener('focus', onFocus)
        el.removeEventListener('blur', onBlur)
      })

      if (originalContent && metaViewport) {
        metaViewport.setAttribute('content', originalContent)
      }
    }
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
