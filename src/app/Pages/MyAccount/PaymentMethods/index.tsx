import { useTranslation } from 'react-i18next'
import H3 from '../../../../components/atoms/typography/h3'
import Button from '../../../../components/atoms/button'
import { CardInfo } from './CardInfo.tsx'
import { useState } from 'react'
import Modal from '../../../../components/molecules/modal'
import { AddCardForm } from './AddCardForm.tsx'
import { v4 } from 'uuid'

export type Card = {
  id: string
  isDefault: boolean
  cardNumber: string
  validPeriod: string
  cvv: string
  system: string
}

export const PaymentMethodsPage = () => {
  const { t } = useTranslation()
  const [cards, setCards] = useState<Card[]>([])
  const [addCardModal, setAddCardModal] = useState(false)
  const [infoModal, setInfoModal] = useState<
    'congratulations' | 'error' | null
  >(null)

  const infoModalTitle = infoModal === 'error' ? t('payments.modal.error') : t('payments.modal.success')
  const infoModalInfo =
    infoModal === 'error' ? t('payments.modal.error-info') : t('payments.modal.success-info')

  const deleteCardHandler = (id: string) => {
    setCards((cards) => cards.filter((card) => card.id !== id))
  }

  const setDefaultHandler = (id: string) => {
    setCards((cards) =>
      cards.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            isDefault: true,
          }
        }
        return {
          ...card,
          isDefault: false,
        }
      })
    )
  }

  return (
    <div className="flex flex-col">
      <H3 text={t('payments.title')} className="uppercase" />
      {!cards.length && (
        <span className="pt-10 pb-6">{t('payments.no-cards')}</span>
      )}
      <div className="mt-10 mb-6 flex flex-col gap-3">
        {cards.map((card) => (
          <CardInfo
            key={card.id}
            card={card}
            deleteHandler={deleteCardHandler}
            setDefaultHandler={setDefaultHandler}
          />
        ))}
      </div>
      <Button onClick={() => setAddCardModal(true)}>
        {t('buttons.attach-card')}
      </Button>
      <Modal
        open={addCardModal}
        setOpen={setAddCardModal}
        className="max-w-[35rem]"
        childrenClassName="flex justify-center"
        title={t('common.add-card')}
        titleClassName="uppercase"
      >
        <AddCardForm
          submitHandler={(values) => {
            setAddCardModal(false)
            if (values.system !== null) {
              setCards((cards) => [
                ...cards,
                {
                  ...(values as Card),
                  id: v4(),
                  isDefault: false,
                },
              ])
              setInfoModal('congratulations')
            } else {
              setInfoModal('error')
            }
          }}
        />
      </Modal>
      <Modal
        open={!!infoModal}
        setOpen={() => setInfoModal(null)}
        className="max-w-[35rem]"
        title={infoModalTitle}
      >
        <p className="text-center">{infoModalInfo}</p>
      </Modal>
    </div>
  )
}
