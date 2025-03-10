import H3 from '../../../../components/atoms/typography/h3'
import { useAppSelector } from '../../../../store'
import { selectEstates } from '../../../../store/estateSlice/selectors.ts'
import EstateCard from '../../../../components/molecules/estate-card'
import { useWindowDimensions } from '../../../../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../../../../helpers/common.ts'
import { cn } from '../../../../helpers/ui.ts'
import { useTranslation } from 'react-i18next'

export const AllProviderObjects = () => {
  const estates = useAppSelector(selectEstates)
  const { width } = useWindowDimensions()
  const { t } = useTranslation()
  const isMedium = width <= BREAKPOINTS.xl
  const preMedium = width <= BREAKPOINTS.xmd

  return (
    <div
      id="allProviderObjects"
      className="flex flex-col items-center pb-[6.25rem]"
    >
      <H3 text={t('real-estate.details.providers-objects.title')} className="max-w-[220px] self-start pb-6 md:pb-10" />
      <div
        className={cn('grid grid-cols-3 gap-10', {
          'grid-cols-2': isMedium,
          'mx-auto grid-cols-1': preMedium,
        })}
      >
        {estates.slice(0, 4).map((estate) => (
          <EstateCard key={estate.id} realEstate={estate} />
        ))}
      </div>
    </div>
  )
}
