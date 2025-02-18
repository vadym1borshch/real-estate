import './../src/index.css'
import { theme } from '../src/theme'
import { ThemeProvider } from '@material-tailwind/react'
import { BrowserRouter } from 'react-router-dom'

export const PreviewDecorator =
  (Story: any) => {
    return (
      <ThemeProvider value={theme}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </ThemeProvider>
    )
  }

