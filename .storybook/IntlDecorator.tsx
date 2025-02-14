import config from '../src/i18n/config'
import { I18nextProvider } from 'react-i18next'

export const IntlDecorator =
  (Story: any) => {
    return (
      <I18nextProvider i18n={config}>
        <Story />
      </I18nextProvider>
    )
  }

