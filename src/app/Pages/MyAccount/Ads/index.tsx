import Button from '../../../../components/atoms/button'
import { useNavigate } from '../../../../helpers/hooks/useNavigate.ts'
import { ADS_ROUTES } from '../../../../@constants/routes.ts'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '../../../../store'
import { setCurrentAdsStatus } from '../../../../store/adsSlice'

export const Ads = () => {
  const navigate = useNavigate()

  const {t} = useTranslation()
  const dispatch = useAppDispatch()
  return (
    <div className="flex flex-col gap-3">
      <Button
        variant="outlined"
        iconId="arrowRightIcon"
        className="w-full text-base"
        onClick={() => {
          navigate(`${ADS_ROUTES.sellAds}/active`)
          dispatch(setCurrentAdsStatus('active'))
        }}
      >
        {t('sell-ads.title')}
      </Button>
      <Button
        variant="outlined"
        iconId="arrowRightIcon"
        className="w-full text-base"
        onClick={() => {
          navigate(`${ADS_ROUTES.rentAds}/active`)
          dispatch(setCurrentAdsStatus('active'))
        }}
      >
        {t('rent-ads.title')}
      </Button>
    </div>
  )
}
