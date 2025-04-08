import H3 from '../../../../components/atoms/typography/h3'
import { useAppSelector } from '../../../../store'
import { selectEstates } from '../../../../store/estateSlice/selectors.ts'
import EstateCard from '../../../../components/molecules/estate-card'
import { useTranslation } from 'react-i18next'

export const AllProviderObjects = () => {
  const estates = useAppSelector(selectEstates)
  const { t } = useTranslation()

  return (
    <div
      id="allProviderObjects"
      className="flex flex-col items-center pb-[6.25rem] lg:pb-[9.375rem]"
    >
      <H3
        text={t('real-estate.details.providers-objects.title')}
        className="max-w-[220px] self-start pb-6 md:pb-10 text-2xl"
      />
      <div className="grid w-full grid-cols-1 gap-5 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
        {estates.slice(0, 4).map((estate) => (
          <EstateCard
            key={estate.id}
            realEstate={estate}
            className="max-w-full"
          />
        ))}
      </div>
    </div>
  )
}
