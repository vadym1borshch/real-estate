import { useAppDispatch, useAppSelector } from '../../../../../store'
import { selectCurrentAds } from '../../../../../store/adsSlice/selectors.ts'
import EstateCard from '../../../../../components/molecules/estate-card'
import { usePathname } from '../../../../../helpers/hooks/usePathname.ts'
import { ADS_ROUTES } from '../../../../../@constants/routes.ts'
import { cn } from '../../../../../helpers/ui.ts'
import { ActionButtons } from './ActionButtons.tsx'
import { useEffect, useState } from 'react'
import Modal from '../../../../../components/molecules/modal'
import { ModalContent } from './ModalContent.tsx'
import { useTranslation } from 'react-i18next'
import { setTopAd } from '../../../../../store/adsSlice'

export type ModalStatus = 'success' | 'rejected' | null

export const AdsType = () => {
  const [modalId, setModalId] = useState<string | null>(null)
  const [modalStatus, setModalStatus] = useState<ModalStatus>(null)
  const [currentAd, setCurrentAd] = useState<string | null>(null)
  const path = usePathname()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const key = path.includes(ADS_ROUTES.rentAds) ? 'rent' : 'buy'

  const ads = useAppSelector(selectCurrentAds(key))

  const modalStatusHandler = (modalId: string, adId?: string) => {
    if (adId) {
      setCurrentAd(adId)
    }
    setModalId(modalId)
  }

  const getModalTitle = () => {
    if (modalId === 'rejected-reason') {
      return t('ads.modal.rejected-reason.title')
    }
    if (modalStatus === 'success') {
      return t('ads.modal.increase-top.success.title')
    }
    if (modalStatus === 'rejected') {
      return t('ads.modal.increase-top.rejected.title')
    }

    return t('ads.modal.increase-top.main.title')
  }

  useEffect(() => {
    if (!modalId) {
      setCurrentAd(null)
    }
  }, [modalId])

  useEffect(() => {
    if (modalStatus === 'success') {
      if (currentAd) {
        dispatch(setTopAd({ id: currentAd }))
      }
    }
  }, [modalStatus, currentAd])

  if (!ads) {
    return null
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(22.5rem,1fr))] place-items-center gap-10">
      {ads.map((ad) => {
        const disabled = ad.status !== 'active' && ad.status !== 'inactive'
        return (
          <div key={ad.id} className="flex w-fit flex-col gap-1.5">
            <EstateCard
              disabled={disabled}
              realEstate={ad}
              className={cn({
                'opacity-50': disabled,
              })}
            />
            <ActionButtons
              status={ad.status}
              adId={ad.id}
              callback={(modalId, adId) => modalStatusHandler(modalId, adId)}
            />
          </div>
        )
      })}
      <Modal
        title={getModalTitle()}
        className="max-w-[35rem]"
        open={!!modalId}
        setOpen={() => {
          setModalId(null)
          setModalStatus(null)
        }}
      >
        <ModalContent
          id={modalId}
          onClick={setModalStatus}
          status={modalStatus}
        />
      </Modal>
    </div>
  )
}
