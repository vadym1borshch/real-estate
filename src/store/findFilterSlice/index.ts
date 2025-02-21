import { createSlice, PayloadAction } from '@reduxjs/toolkit'


/*
export const fetchEstate = createAsyncThunk<RealEstate[], void>('estate', async () => {
  // simulate api call
  await sleep(1000)
  return [...houses]
})
*/


export interface IState {
  filters: {
    id: string,
    title: {
      key: string,
      label: string,
    },
    values: (string | number)[],
    currentValue: (string | number)[] ,
    type: 'input' | 'button'
  }[],
  openFilter: string | null
}

const initialState: IState = {
  filters: [
    {
      id: '1',
      title: {
        key: 'address',
        label: 'Bundesland, Ort oder Postleitzahl',
      },
      values: ['Wien', 'Burgenland', 'Niederösterreich', 'Salzburg'],
      currentValue: [],
      type: 'input',
    },
    {
      id: '2',
      title: {
        key: 'operation',
        label: 'Kaufen',
      },
      values: ['Kaufen', 'Mieten'],
      currentValue: [],
      type: 'button',
    },
    {
      id: '3',
      title: {
        key: 'type',
        label: 'Typ',
      },
      values: ['Wohnung', 'Haus', 'Doppelhaushälfte', 'Einzelhandelsimmobilie'],
      currentValue: [],
      type: 'button',
    },
    {
      id: '4',
      title: {
        key: 'price',
        label: 'Preis',
      },
      values: [0, 0],
      currentValue: [],
      type: 'button',
    },
    {
      id: '5',
      title: {
        key: 'm2',
        label: 'Fläche',
      },
      values: [0, 0],
      currentValue: [],
      type: 'button',
    },
    {
      id: '6',
      title: {
        key: 'rooms',
        label: 'Zimmer',
      },
      values: [1, 2, 3, 4, 5, 6],
      currentValue: [],
      type: 'button',
    },
  ],
  openFilter: null,
}

export const findFilterSlice = createSlice({
  name: 'estate',
  initialState,
  reducers: {
    setOpenFilter: (state, action: PayloadAction<string | null>) => {
      state.openFilter = action.payload
    },
    setFilterValue: (state, action: PayloadAction<{ value: string; id: string }>) => {
      const multiSelectKeys = ['4', '5', '6'];

      state.filters = state.filters.map((filter) => {
        if (filter.id === action.payload.id) {
          const isMultiSelect = multiSelectKeys.includes(filter.id);
          const currentValues = filter.currentValue ?? [];

          let updatedValues;
          if (isMultiSelect) {

            updatedValues = currentValues.includes(action.payload.value)
              ? currentValues.filter((val) => val !== action.payload.value)
              : [...currentValues, action.payload.value];
          } else {
            updatedValues = [action.payload.value];
          }

          return {
            ...filter,
            title: {
              ...filter.title,
              label: isMultiSelect
                ? filter.title.label
                : updatedValues.length > 0
                  ? action.payload.value
                  : filter.title.label,
            },
            currentValue: updatedValues,
          };
        }
        return filter;
      });
    },
  },

})

export const { setOpenFilter, setFilterValue } = findFilterSlice.actions

export default findFilterSlice.reducer