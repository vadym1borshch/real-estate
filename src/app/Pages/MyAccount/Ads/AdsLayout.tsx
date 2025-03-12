import { ReactNode } from 'react'
import { adsFilterStatuses } from '../../../../store/adsSlice'
import Tab from '../../../../components/atoms/tab'
import { useNavigate } from '../../../../helpers/hooks/useNavigate.ts'
import Button from '../../../../components/atoms/button'
import { usePathname } from '../../../../helpers/hooks/usePathname.ts'

interface Props {
  children: ReactNode
  anyAds: boolean
}

export const AdsLayout = ({ children, anyAds }: Props) => {
  const navigation = useNavigate()
  const path = usePathname()
  return (
    <div className="flex w-full flex-col gap-10">
      <div className="flex flex-wrap gap-3">
        {adsFilterStatuses.map((status) => {
          return (
            <Tab
              key={status.type}
              label={status.title}
              selected={status.type === 'active'}
              onClick={() => {
                navigation(`${path}/${status.type}`)
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
