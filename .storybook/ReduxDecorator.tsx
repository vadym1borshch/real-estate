import { Provider } from 'react-redux'
import { store } from '../src/store'

export const ReduxDecorator =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (Story: any) => {
    return (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  }
