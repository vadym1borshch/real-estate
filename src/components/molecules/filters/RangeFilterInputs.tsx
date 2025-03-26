import Input from '../../atoms/input'
import { useAppDispatch, useAppSelector } from '../../../store'
import { addToast } from '../../../store/toastSlise'
import { selectToast } from '../../../store/toastSlise/selectors.ts'
import { useState } from 'react'
import { cn } from '../../../helpers/ui.ts'
import { useTranslation } from 'react-i18next'

interface Props {
  minKey: string
  maxKey: string
  searchParams: URLSearchParams
  updateParams: (key: string, value: string | string[]) => void
  iconId: string
}

const numberExp = /^\d*$/

export const RangeFilterInputs = ({ minKey, maxKey, searchParams, updateParams, iconId }: Props) => {
  const dispatch = useAppDispatch()
  const activeToasts = useAppSelector(selectToast)
  const {t} = useTranslation()

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({})

  const handleChange = (key: string, value: string) => {
    if (numberExp.test(value)) {
      setErrors(prev => ({ ...prev, [key]: false }))

      updateParams(key, value)

      const minValue = parseInt(key === minKey ? value : searchParams.get(minKey) || '0', 10)
      const maxValue = parseInt(key === maxKey ? value : searchParams.get(maxKey) || '0', 10)

      if (minValue > maxValue && maxValue !== 0) {
        const errorMessage = t('errors.min-greater-max')

        const isToastActive = activeToasts.some(toast => toast.message === errorMessage)

        if (!isToastActive) {
          dispatch(addToast({ message: errorMessage, type: 'error' }))
        }

        setErrors({ [minKey]: true, [maxKey]: true })
      } else {
        setErrors({ [minKey]: false, [maxKey]: false })
      }
    } else {
      const errorMessage = t('errors.invalid-number')

      const isToastActive = activeToasts.some(toast => toast.message === errorMessage)

      if (!isToastActive) {
        dispatch(addToast({ message: errorMessage, type: 'error' }))
      }

      setErrors(prev => ({ ...prev, [key]: true }))
    }
  }

  return (
    <div className="flex p-3 gap-1.5">
      <Input
        iconId={iconId}
        placeholder="von"
        className={cn(
          'min-w-[108px] min-h-[35px] ',
          {
            'border-red focus:outline focus:outline-red hover:border-red focus:ring-red focus:border-red': errors[minKey],
          })}
        value={searchParams.get(minKey) || ''}
        onChange={e => handleChange(minKey, e.target.value)}
      />
      <Input
        iconId={iconId}
        placeholder="bis"
        className={cn(
          'min-w-[108px] min-h-[35px]',
          {
            'border-red focus:outline  focus:outline-red hover:border-red focus:ring-red focus:border-red': errors[maxKey],
          })}
        value={searchParams.get(maxKey) || ''}
        onChange={e => handleChange(maxKey, e.target.value)}
      />
    </div>
  )
}
