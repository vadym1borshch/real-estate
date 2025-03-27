export const BREAKPOINTS = {
  sm: 360,
  xsm: 480,
  'pre-sm': 560,
  xmd: 620,
  md: 768,
  'pre-md': 850,
  lg: 1024,
  'pre-xl': 1220,
  xl: 1280,
  '2xl': 1536,
} as const

export const sleep = async (ms: number) =>
  new Promise<void>((resolve) => {
    const id = setTimeout(() => {
      resolve()
      clearTimeout(id)
    }, ms)
  })

type DateFormat = 'full' | 'short' | 'day' | 'time'

export const formatDate = (
  dateInput: Date | string | number,
  locale: string,
  format: DateFormat = 'full'
): string => {
  const date = new Date(dateInput)
  const correctLocale = () => {
    if (locale ===  'ua') {
      return 'uk-UA'
    }
    if (locale === 'de') {
      return 'de-DE'
    }
    return locale
  }

  const weekday = new Intl.DateTimeFormat(correctLocale(), { weekday: 'short' }).format(
    date
  )
  const day = new Intl.DateTimeFormat(correctLocale(), { day: '2-digit' }).format(date)
  const month = new Intl.DateTimeFormat(correctLocale(), { month: 'short' }).format(date)
  const hour = date.getHours().toString().padStart(2, '0')
  const minute = date.getMinutes().toString().padStart(2, '0')
  if (format === 'short') {
    return `${weekday} ${day} ${month}`
  }
  if (format === 'day') {
    return `${day} ${month}`
  }
  if (format === 'time') {
    return `${hour}:${minute}`
  }

  return `${weekday}, ${day} ${month}, ${hour}:${minute}`
}
