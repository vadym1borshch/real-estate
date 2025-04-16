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
import { useAppDispatch, useAppSelector } from '../../../../store'
import { selectUser } from '../../../../store/userSlice/selectors.ts'
import { useAxiosHook } from '../../../../helpers/hooks/useAxios.ts'
import { Agent } from '../../service-around/mock.ts'
import { USER } from '../../../../@constants/URLS.ts'
import { setUser } from '../../../../store/userSlice'
import { addToast } from '../../../../store/toastSlise'
import { Loader } from '../../../../components/atoms/loader'

export const ProfilePage = () => {
  const [openModal, setOpenModal] = useState(false)
  const [file, setFile] = useState<File | File[] | null>(null)
  const [send, setSend] = useState(false)
  const { t } = useTranslation()
  const user = useAppSelector(selectUser)
  const dispatch = useAppDispatch()

  const { execute: update, loading } = useAxiosHook<{ user: Agent }>(
    { url: USER.UPDATE_PHOTO, method: 'PATCH' },
    { manual: true }
  )

  const setAvatar = async (files: File | File[] | null) => {
    try {
      if (files instanceof File && user?.id) {
        const formData = new FormData()
        formData.append('file', files)
        formData.append('id', user.id)

        const userRes = await update({ data: formData })

        if (userRes.data.user) {
          dispatch(setUser(userRes.data.user))
        } else {
          dispatch(
            addToast({ type: 'error', message: t('something went wrong...') })
          )
        }
      }
    } catch (err) {
      console.log(err)
    }
  }

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

  if (!user) {
    return null
  }

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full flex-col items-center pb-[4.0625rem] md:flex-row md:items-start md:justify-between">
        <div className="cursor-pointer md:order-2">
          <FileUpload
            className="!min-h-[7rem] bg-transparent hover:bg-transparent hover:outline-0 focus:border-0"
            buttonTitle={
              loading ? (
                <Loader />
              ) : (
                <Avatar
                  size={7}
                  src={user.photo}
                  className="md:order-2"
                  userName={user.name}
                  userLastName={user.lastName}
                />
              )
            }
            callback={(files) => setAvatar(files)}
          />
        </div>

        <div className="flex flex-col items-center gap-1.5 pt-3 md:order-1 md:items-start">
          <H2
            text={`${user.name} ${user.lastName}`}
            className="md:text-start"
          />
          <div
            className={cn('flex flex-col items-center md:flex-row', {
              'md:gap-3': user.agency?.name,
            })}
          >
            <span className="text-blue-gray text-lg">{user.agency?.name}</span>
            {user.verified?.value ? (
              <span className="text-blue flex h-full items-center gap-0.5">
                {t('profile.verification.title.verified')}
                <Icon id="checkBadgeOutlinedIcon" className="h-6 w-6" />
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
      <ProfileForm user={user} />
      <Modal
        open={openModal}
        setOpen={(open) => {
          setSend(false)
          setFile(null)
          setOpenModal(open)
        }}
        className="max-w-[35rem]"
        title="VERIFIZIERUNG"
      >
        {modalChild}
      </Modal>
    </div>
  )
}
