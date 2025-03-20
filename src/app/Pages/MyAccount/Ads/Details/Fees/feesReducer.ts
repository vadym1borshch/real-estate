import { FeeField, initialFields } from './mock.ts'
import { v4 } from 'uuid'

export const ADD_FIELD_TYPE = 'ADD_FIELD'
export const UPDATE_FIELD_TYPE = 'UPDATE_FIELD'
export const RESET_TYPE = 'RESET'

type Action =
  | { type: typeof ADD_FIELD_TYPE; key: string, name: string }
  | {
      type: typeof UPDATE_FIELD_TYPE
      key: string
      value: string
    }
  | { type: typeof RESET_TYPE }

export const fieldsReducer = (
  state: FeeField[],
  action: Action
): FeeField[] => {
  switch (action.type) {
    case ADD_FIELD_TYPE:
      return [
        ...state,
        {
          id: v4(),
          name: action.name,
          percent: '',
          additional_info: '',
          key: action.key,
        },
      ]
    case UPDATE_FIELD_TYPE:
      return state.map((field) => {
        return (field.key + '-name') === action.key
          ? { ...field, name: action.value }
          : field
      })
    case RESET_TYPE:
      return initialFields
    default:
      return state
  }
}
