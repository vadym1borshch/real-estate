import ImagePreview from '../../../../components/molecules/image-preview'
import Avatar from '../../../../components/atoms/avatar'
import Icon from '../../../../components/atoms/icon'
import Caption from '../../../../components/atoms/typography/caption'
import Button from '../../../../components/atoms/button'
import { Agent } from '../../service-around/mock.ts'
import { useElementSizes } from '../../../../helpers/hooks/useElementsSizes.ts'
import { RefObject, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { scrollToPageBlock } from './helpers.ts'
import Modal from '../../../../components/molecules/modal'
import H3 from '../../../../components/atoms/typography/h3'
import Input from '../../../../components/atoms/input'
import { EstateImage } from '../../../../store/estateSlice'

interface Props {
  agent: Agent
  ref: RefObject<HTMLDivElement | null>
  images: EstateImage[]
}

export const ImagesBlock = ({ agent, ref, images }: Props) => {
  const { containerDimension } = useElementSizes({
    containerRef: ref,
    containerDimensionProp: 'width',
  })
  const [openModal, setOpenModal] = useState(false)
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const { t } = useTranslation()

  return (
    <div className="flex flex-col items-center md:grid md:grid-cols-[2fr_1fr] md:items-start md:gap-10">
      <ImagePreview images={images} withButtons width={containerDimension} />
      <div className="border-blue-gray flex w-full min-w-[18.75rem] flex-col items-center rounded-lg border p-3 pt-7.5 md:h-full md:min-w-[22.5rem] md:px-7.5">
        <Avatar userName={agent.name} size={10} src={agent.photo} />
        <div className="flex w-full flex-col items-center pt-6">
          <span className="text-[1.125rem]">{agent.name}</span>
          <span className="text-blue-gray pt-1 text-base">
            {agent.agency?.name}
          </span>
        </div>

        <div className="flex w-full flex-col items-center py-9">
          <p className="font-500 text-xl">{agent.phone}</p>
          <p className="flex items-center pt-1.5">
            <Icon id="checkBadgeBlueIcon" className="h-6 w-6" />
            <Caption text={t(agent.verified.title)} />
          </p>
        </div>

        <div className="flex w-full flex-col gap-3 md:h-full md:justify-end">
          <Button
            onClick={() => scrollToPageBlock('allProviderObjects')}
            className="bg-charcoal hover:bg-seafoam-green focus:border-blue-gray w-full focus:outline-none"
          >
            {t('buttons.all-provider-objects')}
          </Button>
          <Button
            onClick={() => setOpenModal(true)}
            className="bg-charcoal hover:bg-seafoam-green focus:border-blue-gray w-full focus:outline-none"
          >
            {t('buttons.land-registry')}
          </Button>
          <Button
            className="w-full"
            onClick={() => scrollToPageBlock('contactProviderBlock')}
          >
            {' '}
            {t('buttons.contact-provider')}
          </Button>
        </div>
        <Modal
          open={openModal}
          setOpen={() => {
            setOpenModal(!openModal)
            setStep(1)
          }}
          className="max-w-[35rem]"
        >
          {step === 1 && (
            <div className="flex flex-col items-center gap-6">
              <H3
                text={t('real-estate.details.modal.cost-notification.title')}
                className="text-center"
              />
              <p className="max-w-[15rem] text-center">
                {t('real-estate.details.modal.cost-notification.description')}
              </p>
              <Button onClick={() => setStep(2)}>{t('buttons.next')}</Button>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col items-center gap-6">
              <H3
                text={t('real-estate.details.modal.email.title')}
                className="text-center"
              />
              <p className="max-w-[15rem] text-center">
                {t('real-estate.details.modal.email.description')}
              </p>
              <Input
                placeholder="johnsmith@email.at"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
              <Button onClick={() => setStep(3)}>{t('buttons.next')}</Button>
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-col items-center gap-6">
              <H3
                text={t('real-estate.details.modal.confirmation.title')}
                className="text-center"
              />
              <p className="max-w-[15rem] text-center">
                {t('real-estate.details.modal.confirmation.description')}
              </p>
            </div>
          )}
        </Modal>
      </div>
    </div>
  )
}
