import { useTranslation } from 'react-i18next'
import TextArea from '../../../../components/atoms/text-area'
import Button from '../../../../components/atoms/button'
import { useState } from 'react'
import Modal from '../../../../components/molecules/modal'
import { BlockWrapper } from './BlockWrapper.tsx'
import { OrderWrapper } from './OrderWrapper.tsx'

export const PhotoVideoOrderPage = () => {
  const { t } = useTranslation()
  const [query, setQuery] = useState(t('order.text-area.placeholder'))
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="flex flex-col gap-[5.625rem]">
      <BlockWrapper
        title={t('order.price-list.title')}
        className="flex w-full flex-col gap-1.5 lg:flex-row"
      >
        <OrderWrapper
          title={t('order.price-list.area')}
          min={t('order.price-list.up-to') + ' 60 m²'}
          standard="60 - 130 m²"
          large={t('order.price-list.from') + ' 130 m²'}
        />{' '}
        <OrderWrapper
          title={t('order.price-list.photo')}
          min="200 €"
          standard="240 €"
          large="270 €"
        />{' '}
        <OrderWrapper
          title={t('order.price-list.video')}
          min="230 €"
          standard="260 €"
          large="280 €"
        />{' '}
        <OrderWrapper
          title={t('order.price-list.combo')}
          min="400 €"
          standard="450 €"
          large="500 €"
        />
      </BlockWrapper>

      <BlockWrapper
        title={t('order.included.title')}
        className="flex flex-col gap-1.5"
      >
        <span className="bg-light-gray2 rounded-sm px-3 py-1.5">
          {t('order.included.license-music')}
        </span>
        <span className="bg-light-gray2 rounded-sm px-3 py-1.5">
          {t('order.included.video-thumbnail')}
        </span>
        <span className="bg-light-gray2 rounded-sm px-3 py-1.5">
          {t('order.included.logo')}
        </span>
      </BlockWrapper>
      <BlockWrapper
        title={t('order.extra.title')}
        className="grid w-full grid-cols-1 gap-1.5 lg:grid-cols-[3fr_1fr]"
      >
        <>
          <span className="bg-charcoal lg:text-charcoal lg:bg-light-gray2 rounded-sm px-3 py-1.5 text-white">
            {t('order.extra.social-media')}
          </span>
          <span className="bg-light-gray2 rounded-sm px-3 py-1.5">
            30 €/50 €
          </span>
        </>
        <>
          <span className="bg-charcoal lg:text-charcoal lg:bg-light-gray2 rounded-sm px-3 py-1.5 text-white">
            {t('order.extra.drone-footage')}
          </span>
          <span className="bg-light-gray2 rounded-sm px-3 py-1.5">50 €</span>
        </>
        <>
          <span className="bg-charcoal lg:text-charcoal lg:bg-light-gray2 rounded-sm px-3 py-1.5 text-white">
            {t('order.extra.travel-outside')}
          </span>
          <span className="bg-light-gray2 rounded-sm px-3 py-1.5">
            30 € {t('order.extra.by')} 50 km
          </span>
        </>
      </BlockWrapper>
      <div className="flex flex-col gap-6">
        <TextArea
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
        <Button onClick={() => setShowModal(true)}>
          {t('buttons.send-message')}
        </Button>
      </div>
      <Modal
        open={showModal}
        setOpen={setShowModal}
        title={t('order.modal.title')}
        className="max-w-[35rem]"
      >
        <p className="text-center">{t('order.modal.text')}</p>
      </Modal>
    </div>
  )
}
