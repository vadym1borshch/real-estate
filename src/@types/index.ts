export type DateFormat = 'full' | 'short' | 'day' | 'time'

export interface Service {
  id: string
  title: string
  checked: boolean
}

export interface ServiceWorkers {
  id: string,
  name: string,
  profession: {
    title: string,
    key: string
  },
  description: string,
  phone: string,
  email: string,
  address: string,
  photo: string
}