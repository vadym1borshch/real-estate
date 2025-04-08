import { useAppSelector } from '../../../../store'
import { selectFavoritesEstates } from '../../../../store/estateSlice/selectors.ts'
import EstateCard from '../../../../components/molecules/estate-card'
import { useWindowDimensions } from '../../../../helpers/hooks/useWindowDimensions.ts'
import { cn } from '../../../../helpers/ui.ts'
import { BREAKPOINTS } from '../../../../@constants'

export const FavoritesPage = () => {
  const estates = useAppSelector(selectFavoritesEstates)
  const {width } = useWindowDimensions()
  const isLarge = width >= BREAKPOINTS.PRE_LG
  return (
    <div className={cn("grid grid-cols-1  w-full gap-6 xl:gap-10", {
      "lg:grid-cols-2": isLarge
    })}>
      {estates.map((estate) => {
        return <EstateCard realEstate={estate} className="!max-w-full"/>
      })}
    </div>
  )
}
