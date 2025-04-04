import H3 from '../../../components/atoms/typography/h3'
import { useTranslation } from 'react-i18next'
import Button from '../../../components/atoms/button'
import { useEmailConfirm } from '../../../contexts/ConfirmationEmailContext.tsx'
import { useNavigate } from '../../../helpers/hooks/useNavigate.ts'
import { ROUTES } from '../../../@constants/routes.ts'

export const ConfirmRegister = () => {
  const { t } = useTranslation()
  const { setIsConfirm } = useEmailConfirm()
  const navigate = useNavigate()
  return (
    <div className="flex h-[calc(100svh-78px)] w-full max-w-[360px] flex-col items-center justify-center gap-10 lg:h-[calc(100svh-120px)]">
      <H3 text={t('register.title')} />
      <p>{t('register.confirm-register.p')}</p>
      <Button
        className="w-full"
        onClick={() => {
          navigate(ROUTES.HOME)
          setIsConfirm(true)
        }}
      >
        {t('buttons.confirm-email')}
      </Button>
    </div>
  )
}
