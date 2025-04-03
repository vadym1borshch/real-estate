import type { Preview } from '@storybook/react'
import { PreviewDecorator } from './PreviewDecorator'
import { IntlDecorator } from './IntlDecorator'
import { ReduxDecorator } from './ReduxDecorator'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [PreviewDecorator, IntlDecorator, ReduxDecorator],
}

export default preview
