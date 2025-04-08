import { DateFormat } from '../@types'

export const sleep = async (ms: number) =>
  new Promise<void>((resolve) => {
    const id = setTimeout(() => {
      resolve()
      clearTimeout(id)
    }, ms)
  })

export const formatDate = (
  dateInput: Date | string | number,
  locale: string,
  format: DateFormat = 'full'
): string => {
  const date = new Date(dateInput)
  const correctLocale = () => {
    if (locale === 'ua') {
      return 'uk-UA'
    }
    if (locale === 'de') {
      return 'de-DE'
    }
    return locale
  }

  const weekday = new Intl.DateTimeFormat(correctLocale(), {
    weekday: 'short',
  }).format(date)
  const day = new Intl.DateTimeFormat(correctLocale(), {
    day: '2-digit',
  }).format(date)
  const month = new Intl.DateTimeFormat(correctLocale(), {
    month: 'short',
  }).format(date)
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

export const truncateTextByChars = (
  text: string,
  maxChars: number = 10
): string => {
  return text.length > maxChars ? text.slice(0, maxChars) + '…' : text
}
