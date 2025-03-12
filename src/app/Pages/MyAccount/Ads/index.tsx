import Button from '../../../../components/atoms/button'
import { useNavigate } from '../../../../helpers/hooks/useNavigate.ts'
import { ROUTES } from '../../../../@constants/routes.ts'
import { useTranslation } from 'react-i18next'

export const Ads = () => {
  const navigate = useNavigate()
  const {t} = useTranslation()
  return (
    <div className="flex w-full flex-col gap-3">
      <Button
        variant="outlined"
        iconId="arrowRightIcon"
        className="w-full text-base"
        onClick={() => navigate(ROUTES.sellAds)}
      >
        {t('sell-ads.title')}
      </Button>
      <Button
        variant="outlined"
        iconId="arrowRightIcon"
        className="w-full text-base"
        onClick={() => navigate(ROUTES.rentAds)}
      >
        {t('rent-ads.title')}
      </Button>
    </div>
  )
}
