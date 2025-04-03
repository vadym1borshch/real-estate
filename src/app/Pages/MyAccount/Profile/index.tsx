import Avatar from '../../../../components/atoms/avatar'
import H2 from '../../../../components/atoms/typography/h2'
import { cn } from '../../../../helpers/ui.ts'
import Icon from '../../../../components/atoms/icon'
import { ProfileForm } from './Form.tsx'
import { useTranslation } from 'react-i18next'
import FileUpload from '../../../../components/molecules/file-upload'
import { useMemo, useState } from 'react'
import Modal from '../../../../components/molecules/modal'
import Button from '../../../../components/atoms/button'
import { ModalChildWrapper } from './ModalChildWrapper.tsx'
import { useAppSelector } from '../../../../store'
import { selectUser } from '../../../../store/userSlice/selectors.ts'

export const ProfilePage = () => {
  const [openModal, setOpenModal] = useState(false)
  const [file, setFile] = useState<File | File[] | null>(null)
  const [send, setSend] = useState(false)
  const { t } = useTranslation()
  const agent = useAppSelector(selectUser)

  const modalChild = useMemo(() => {
    if (!Array.isArray(file)) {
      if (send) {
        return (
          <ModalChildWrapper text={t('profile.verification.modal.p3')}>
            <span>{file?.name}</span>
            <Button
              onClick={() => {
                setOpenModal(false)
                setSend(false)
              }}
            >
              {t('buttons.understood')}
            </Button>
          </ModalChildWrapper>
        )
      }
      if (file) {
        return (
          <ModalChildWrapper text={t('profile.verification.modal.p2')}>
            <span>{file?.name}</span>
            <Button
              onClick={() => {
                setSend(true)
                setFile(null)
              }}
            >
              {t('buttons.send')}
            </Button>
          </ModalChildWrapper>
        )
      }
    }
    return (
      <ModalChildWrapper text={t('profile.verification.modal.p1')}>
        <FileUpload
          callback={(file) => {
            setFile(file)
          }}
          buttonTitle={t('buttons.upload-doc')}
        />
      </ModalChildWrapper>
    )
  }, [file, send])

  if (!agent) {
    return null
  }

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col items-center pb-[4.0625rem] md:flex-row md:items-start md:justify-between">
        <Avatar size={7} src={agent.photo} className="md:order-2" />
        <div className="flex flex-col items-center gap-1.5 pt-3 md:order-1 md:items-start">
          <H2
            text={`${agent.name} ${agent.lastName}`}
            className="md:text-start"
          />
          <div className="flex flex-col items-center md:flex-row md:gap-3">
            <span className="text-blue-gray text-lg">{agent.agency?.name}</span>
            {agent.verified.value ? (
              <span className="text-blue flex h-full items-center gap-[2px]">
                {t('profile.verification.title.verified')}
                <Icon
                  id="checkBadgeOutlinedIcon"
                  className="h-[24px] w-[24px]"
                />
              </span>
            ) : (
              <span
                onClick={() => setOpenModal(true)}
                className={cn(
                  'text-coral hover:text-light-coral cursor-pointer text-base'
                )}
              >
                {t('profile.verification.title.not-verified')}
              </span>
            )}
          </div>
        </div>
      </div>
      <ProfileForm user={agent} />
      <Modal
        open={openModal}
        setOpen={(open) => {
          setSend(false)
          setFile(null)
          setOpenModal(open)
        }}
        className="max-w-[560px]"
        title="VERIFIZIERUNG"
      >
        {modalChild}
      </Modal>
    </div>
  )
}
