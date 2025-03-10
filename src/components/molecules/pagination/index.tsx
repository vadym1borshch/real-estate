import { MouseEvent, useEffect } from 'react'
import Button from '../../atoms/button'
import Icon from '../../atoms/icon'
import { cn } from '../../../helpers/ui.ts'
import { useTranslation } from 'react-i18next'

const buttonStyle =
  'flex items-center gap-2 focus:rounded-sm min-w-[6.125rem] disabled:bg-transparent hover:text-seafoam-green hover:border-seafoam-green'

interface Props {
  count: number
  page: number
  setPage: (page: number) => void
  className?: string
}

const Pagination = ({ count, page, setPage, className }: Props) => {
  const { t } = useTranslation()

  const setPageHandler = (
    e?: MouseEvent<HTMLButtonElement>,
    index?: number
  ) => {
    if (!e) return

    const isPrevPressed = e.currentTarget.innerText === t('buttons.prev')
    const isNextPressed = e.currentTarget.innerText === t('buttons.next')

    if (index) {
      setPage(index)
      return
    }

    if (isPrevPressed) {
      setPage(page - 1)
      return
    }

    if (isNextPressed) {
      setPage(page + 1)
      return
    }
  }

  const generatePages = () => {
    const pages: (number | string)[] = []

    if (count <= 5) {
      pages.push(...Array.from({ length: count }, (_, i) => i + 1))
    } else {
      pages.push(1)
      if (page <= 5) {
        pages.push(2, 3, 4, 5, '...')
      } else if (page >= 4 && page <= count - 3) {
        pages.push('...', page - 1, page, page + 1, '...')
      } else {
        pages.push('...', count - 4, count - 3, count - 2, count - 1)
      }
      pages.push(count)
    }

    return pages
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [page])

  return (
    <div className={cn('flex items-center gap-4', className)}>
      <Button
        variant="outlined"
        size="sm"
        className={cn('pr-3 pl-1.5', buttonStyle)}
        onClick={(e) => setPageHandler(e)}
        disabled={page === 1}
      >
        <Icon id="chevronDownIcon" className="h-6 w-6 rotate-90" />{' '}
        {t('buttons.prev')}
      </Button>
      <div className="flex items-center gap-2">
        {generatePages().map((item, index) =>
          typeof item === 'number' ? (
            <Button
              key={`page${item}`}
              size="sm"
              onClick={(e) => setPageHandler(e, item as number)}
              variant="outlined"
              selected={page === item}
              className={cn(
                'hover:text-seafoam-green hover:border-seafoam-green h-10 w-10 p-0 focus:rounded-sm',
                {
                  'hover:bg-seafoam-green focus:border-seafoam-green hover:text-white':
                    page === item,
                }
              )}
            >
              {item}
            </Button>
          ) : (
            <span
              key={`dots${index}`}
              className="flex h-10 w-10 items-center justify-center"
            >
              ...
            </span>
          )
        )}
      </div>
      <Button
        size="sm"
        variant="outlined"
        className={cn('pr-1.5 pl-3', buttonStyle)}
        onClick={(e) => setPageHandler(e)}
        disabled={page === count}
      >
        {t('buttons.next')}
        <Icon id="chevronDownIcon" className="h-6 w-6 -rotate-90" />
      </Button>
    </div>
  )
}

export default Pagination
