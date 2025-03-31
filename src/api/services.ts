import { baseApi } from './index.ts'

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

const servicesApi = baseApi<Service>('services')

export const updateService = async (id: string, checked: boolean) => {
  await servicesApi.patch(id, { checked })
}
