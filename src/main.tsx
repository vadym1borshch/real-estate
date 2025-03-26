import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import config from './i18n/config.ts'
import App from './app/App.tsx'
import { ThemeProvider } from '@material-tailwind/react'
import { theme } from './theme.ts'
import { Provider } from 'react-redux'
import { store } from './store'
import { ListingProvider } from './contexts/ListingContext.tsx'
import { ConfirmProvider } from './contexts/ConfirmationEmailContext.tsx'
import { ModeProvider } from './contexts/ModContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider value={theme}>
        <I18nextProvider i18n={config}>
          <ModeProvider>
            <ListingProvider>
              <ConfirmProvider>
                <App />
              </ConfirmProvider>
            </ListingProvider>
          </ModeProvider>
        </I18nextProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
)
