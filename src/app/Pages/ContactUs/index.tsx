import H2 from '../../../components/atoms/typography/h2'
import { useTranslation } from 'react-i18next'
import Modal from '../../../components/molecules/modal'
import { useState } from 'react'
import ContactUsForm from '../../../components/organisms/contact-us-form'

export const ContactUsPage = () => {
  const { t } = useTranslation()
  const [openModal, setOpenModal] = useState(false)

  return (
    <div className="flex w-full max-w-[72.5rem] flex-col items-center">
      <div className="flex w-full max-w-[47.5rem] flex-col items-center">
        <H2 text={t('contact-us.title')} className="text-center" />
        <p className="mt-6 mb-[5.625rem] text-center">
          {t('contact-us.descriptions')}
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-10 pb-[9.375rem] md:grid-cols-[2fr_1fr]">
       <ContactUsForm callback={() => setOpenModal(true)} withAgreeField />
        <div className="mt-6 flex flex-col items-center gap-6 md:items-start">
          <p className="text-center md:text-start">
            {t('contact-us.assistance.descriptions')}
          </p>
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-600"> {t('contact-us.assistance.address')}</h5>
            <span>Fylpi Immo-online GmbH</span>
            <span>Forchheimergasse 3/13</span>
            <span>1230 Wien</span>
            <span>Österreich</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-600">{t('contact-us.assistance.email')}</h5>
            <span>office@fylpi.at</span>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-600">
              {' '}
              {t('contact-us.assistance.open-hours')}
            </h5>
            <span>
              {t('contact-us.assistance.mon-to-fri', { value: '9:00 - 18:00' })}
            </span>
            <span>
              {t('contact-us.assistance.sat', { value: '10:00 - 14:00' })}
            </span>
            <span>{t('contact-us.assistance.sun')}</span>
          </div>
        </div>
      </div>
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
