import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../../../../components/atoms/button'
import { modalInfo } from './common.ts'
import { FormLayoutButtons } from './Wrappers.tsx'
import Modal from '../../../../../components/molecules/modal'
import ReactMarkdown from 'react-markdown'
import { EntityManageForm } from '../EntityManageForm.tsx'

export const DetailPage = () => {
  const { t } = useTranslation()
  const [openInfoModal, setOpenInfoModal] = useState(false)

  useEffect(() => {
    setOpenInfoModal(true)
  }, [])

  return (
    <>
      <EntityManageForm>
        <FormLayoutButtons handleSave={() => {}} handleNext={() => {}} />
      </EntityManageForm>
      <Modal
        open={openInfoModal}
        setOpen={setOpenInfoModal}
        className="max-h-[90svh] max-w-[35rem] overflow-y-scroll"
      >
        <ul className="whitespace-pre-wrap">
          <ReactMarkdown>{t(modalInfo)}</ReactMarkdown>
        </ul>
        <Button
          className="mx-auto mt-6"
          onClick={() => setOpenInfoModal(false)}
        >
          Ok
        </Button>
      </Modal>
    </>
  )
}
