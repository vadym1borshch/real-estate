import { useState } from 'react'
import ContactUsForm from '../../../../components/organisms/contact-us-form'
import Avatar from '../../../../components/atoms/avatar'
import { Agent } from '../../service-around/mock.ts'
import H3 from '../../../../components/atoms/typography/h3'
import Modal from '../../../../components/molecules/modal'
import { useTranslation } from 'react-i18next'

interface Props {
  agent: Agent
}

export const ContactProviderBlock = ({ agent }: Props) => {
  const [openModal, setOpenModal] = useState(false)
  const { t } = useTranslation()
  return (
    <div
      id="contactProviderBlock"
      className="flex w-full flex-col py-[6.25rem] md:grid md:grid-cols-[2fr_1fr] md:gap-10 lg:py-[9.375rem]"
    >
      <H3
        text={t('real-estate.details.contact-provider.title')}
        className="max-w-[13.75rem] pb-6 md:pb-10"
      />
      <div className="flex items-center gap-3 pb-6 md:pb-0">
        <Avatar size={3.75} src={agent.photo} />
        <div className="flex flex-col">
          <span className="text-base">{agent.name}</span>
          <span className="text-blue-gray text-xs">{agent.agency?.name}</span>
        </div>
      </div>
      <div className="flex flex-col gap-6 pb-6 md:order-1 md:pt-7">
        <p className="bg-light-gray2 text-blue-gray rounded-lg p-4 text-xs leading-[150%] md:p-6">
          {t('real-estate.details.contact-provider.provider-descr')}
        </p>
      </div>
      <ContactUsForm textFieldRows={3} callback={() => setOpenModal(true)} />
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        title={t('contact-us.modal.title')}
        className="max-w-[35rem]"
      >
        <p className="text-center">{t('contact-us.modal.message')}</p>
      </Modal>
    </div>
  )
}
