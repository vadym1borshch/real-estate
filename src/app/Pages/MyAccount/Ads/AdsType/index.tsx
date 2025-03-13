import { useAppSelector } from '../../../../../store'
import { selectCurrentAds } from '../../../../../store/adsSlice/selectors.ts'
import EstateCard from '../../../../../components/molecules/estate-card'
import { usePathname } from '../../../../../helpers/hooks/usePathname.ts'
import { ADS_ROUTES } from '../../../../../@constants/routes.ts'
import Icon from '../../../../../components/atoms/icon'
import Button from '../../../../../components/atoms/button'

const actionButtons = [
  {
    id: '1',
    children: 'Top',
    type: 'default',
  },
  {
    id: '2',
    children: 'homeIcon',
    type: 'icon',
  },
  {
    id: '3',
    children: 'keysIcon',
    type: 'icon',
  },
  {
    id: '4',
    children: 'eyeHideIcon',
    type: 'icon',
  },
  {
    id: '5',
    children: 'editIcon',
    type: 'icon',
  },
  {
    id: '6',
    children: 'deleteIcon',
    type: 'icon',
  },
]

export const AdsType = () => {
  const path = usePathname()

  const key = path.includes(ADS_ROUTES.rentAds) ? 'rent' : 'buy'

  const ads = useAppSelector(selectCurrentAds(key))

  if (!ads) {
    return null
  }
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(22.5rem,1fr))] place-items-center gap-10">
      {ads.map((ad) => (
        <div key={ad.id} className="flex w-fit flex-col gap-1.5">
          <EstateCard realEstate={ad} />
          <div className="grid w-[22.5rem] min-w-[300px] grid-cols-[3fr_1fr_1fr_1fr_1fr_1fr] gap-1.5">
            {actionButtons.map((button) => {
              if (button.type === 'default') {
                return (
                  <Button className="!h-[40px] w-auto" key={button.id}>
                    {button.children}
                  </Button>
                )
              }
              return (
                <Button
                  key={button.id}
                  className="bg-charcoal hover:bg-seafoam-green !h-[40px] !w-[40px] px-0 text-white"
                >
                  <Icon id={button.children} className="h-[24px] w-[24px]" />
                </Button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
