import H2 from '../../../components/atoms/typography/h2'
import Button from '../../../components/atoms/button'
import { useTranslation } from 'react-i18next'
import { useNavigate } from '../../../helpers/hooks/useNavigate.ts'

export const NotFoundPage = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center justify-center">
      <H2 text="ERROR 404" />
      <p className="text-center pt-6 pb-[5.625rem]">
        {t('not-found.description')}
      </p>
      <Button
        className="mb-[9.375rem]"
        onClick={() => navigate('/')}
      >
        {t('not-found.button')}
      </Button>
    </div>
  )
}