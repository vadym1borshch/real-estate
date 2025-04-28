export interface IFilter {
  id: string
  key: string
  title: string
  values: (
    | {
        id: string
        value: string
      }
    | number
  )[]

  type: 'input' | 'button'
}

export const data: IFilter[] = [
  {
    id: '1',
    key: 'address',
    title: 'filters.address',
    values: [
      {
        id: 'wien',
        value: 'Wien',
      },
      {
        id: 'burgenland',
        value: 'Burgenland',
      },
      {
        id: 'niederösterreich',
        value: 'Niederösterreich',
      },
      {
        id: 'salzburg',
        value: 'Salzburg',
      },
    ],
    type: 'input',
  },
  {
    id: '2',
    key: 'operation',
    title: 'real-estate.operations.buy',
    values: [
      {
        id: 'buy',
        value: 'real-estate.operations.buy',
      },
      {
        id: 'rent',
        value: 'real-estate.operations.rent',
      },
    ],
    type: 'button',
  },
  {
    id: '3',
    key: 'type',
    title: 'filters.type',
    values: [
      {
        id: 'apartment',
        value: 'real-estate.type.apartment',
      },
      {
        id: 'house',
        value: 'real-estate.type.house',
      },
      {
        id: 'semi-detached-house',
        value: 'real-estate.type.semi-detached-house',
      },
      {
        id: 'retail-property',
        value: 'real-estate.type.retail-property',
      },
    ],
    type: 'button',
  },
  {
    id: '4',
    key: 'price',
    title: 'filters.price',
    values: [0, 0],
    type: 'button',
  },
  {
    id: '5',
    key: 'm2',
    title: 'filters.area',
    values: [0, 0],
    type: 'button',
  },
  {
    id: '6',
    key: 'rooms',
    title: 'real-estate.rooms',
    values: [1, 2, 3, 4, 5, 6],
    type: 'button',
  },
]
