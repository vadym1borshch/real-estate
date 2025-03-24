import { useAppSelector } from '../../../../store'
import { selectFavoritesEstates } from '../../../../store/estateSlice/selectors.ts'
import EstateCard from '../../../../components/molecules/estate-card'

export const FavoritesPage = () => {
  const estates = useAppSelector(selectFavoritesEstates)
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(22.5rem,1fr))] place-items-center gap-10">
      {estates.map((estate) => {
        return <EstateCard realEstate={estate} />
      })}
    </div>
  )
}
