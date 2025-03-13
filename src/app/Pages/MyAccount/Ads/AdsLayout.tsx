import { ReactNode } from 'react'
import { adsFilterStatuses, setCurrentAdsStatus } from '../../../../store/adsSlice'
import Tab from '../../../../components/atoms/tab'
import Button from '../../../../components/atoms/button'
import { useRoute } from '../useRoute.ts'
import { useAppDispatch } from '../../../../store'
import { useTranslation } from 'react-i18next'

interface Props {
  children: ReactNode
  anyAds?: boolean
  onClick: (value: string) => void
}

export const AdsLayout = ({ children, anyAds, onClick }: Props) => {
  const activeRoute = useRoute()
  const dispatch = useAppDispatch()
  const {t} = useTranslation()
  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex flex-wrap gap-3">
        {adsFilterStatuses.map((status) => {
          return (
            <Tab
              key={status.type}
              label={t(status.title)}
              selected={status.type === activeRoute}
              onClick={() => {
                onClick(status.type)
                dispatch(setCurrentAdsStatus(status.type))
              }}
            />
          )
        })}
      </div>
      <div className="flex w-full flex-col items-center gap-6 md:items-start">
        {!anyAds && <span>Sie haben derzeit keine Anzeigen.</span>}
        <Button className="w-full md:w-fit">Anzeige erstellen</Button>
      </div>
      {children}
    </div>
  )
}
