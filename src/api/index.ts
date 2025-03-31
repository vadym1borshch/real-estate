import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const baseApi = <T>(resource: string) => ({
  getAll: (params?: Record<string, never>) =>
    api.get<T[]>(`/${resource}`, { params }),

  getById: (id: number | string) => api.get<T>(`/${resource}/${id}`),

  create: (data: Partial<T>) => api.post<T>(`/${resource}`, data),

  update: (id: number | string, data: Partial<T>) =>
    api.put<T>(`/${resource}/${id}`, data),

  patch: (id: number | string, data: Partial<T>) =>
    api.patch<T>(`/${resource}/${id}`, data),

  delete: (id: number | string) => api.delete<void>(`/${resource}/${id}`),
})
