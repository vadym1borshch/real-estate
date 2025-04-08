import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react'
import { theme } from '../src/theme'
import './../src/index.css'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PreviewDecorator = (Story: any ) => {
  return (
    <ThemeProvider value={theme}>
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </ThemeProvider>
  )
}
