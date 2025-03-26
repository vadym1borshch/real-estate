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
    <div className="flex max-w-[360px] flex-col gap-10 pt-[6.8125rem]">
      <H3 text={t('register.title')} />
      <p>{t('register.confirm-register.p')}</p>
      <Button
        className="w-full"
        onClick={() => {
          navigate(ROUTES.home)
          setIsConfirm(true)
        }}
      >
        {t('buttons.confirm-email')}
      </Button>
    </div>
  )
}
