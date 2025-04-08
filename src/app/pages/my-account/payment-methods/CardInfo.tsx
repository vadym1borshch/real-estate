import Button from '../../../../components/atoms/button'
import Icon from '../../../../components/atoms/icon'
import { Card } from './index.tsx'
import { cn } from '../../../../helpers/ui.ts'
import { useTranslation } from 'react-i18next'

interface Props {
  deleteHandler: (id: string) => void
  card: Card
  setDefaultHandler: (id: string) => void
}

export const CardInfo = ({ card, setDefaultHandler, deleteHandler }: Props) => {
  const { t } = useTranslation()

  function formatFullMaskedCard(cardNumber: string): string {
    const cleaned = cardNumber.replace(/\D/g, '')
    const last4 = cleaned.slice(-4)
    return `**** **** **** ${last4}`
  }

  return (
    <div className="border-blue-gray flex w-full items-center justify-between rounded-sm border px-3">
      <div className="grid w-full grid-cols-1 gap-1.5 py-3 lg:grid-cols-2">
        <span>
          {card.system} {formatFullMaskedCard(card.cardNumber)}
        </span>
        <span
          className={cn('text-blue-gray', {
            'hover:text-coral cursor-pointer': !card.isDefault,
          })}
          onClick={() => setDefaultHandler(card.id)}
        >
          {card.isDefault ? t('payments.basic') : t('payments.make-basic')}
        </span>
      </div>
      <Button variant="text" className="self-start p-0 lg:self-center">
        <Icon
          id="deleteIcon"
          className="text-blue-gray hover:text-charcoal h-6 w-6 transition-all duration-300"
          onClick={() => deleteHandler(card.id)}
        />
      </Button>
    </div>
  )
}
