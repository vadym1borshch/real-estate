import H3 from '../../../../components/atoms/typography/h3'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../../../store/index.ts'
import { selectCurrentEstate } from '../../../../store/estateSlice/selectors.ts'
import { useEffect, useState } from 'react'
import { useAxiosHook } from '../../../../helpers/hooks/useAxios.ts'
import { Data } from '../../../../@types/index.ts'
import { Loader } from '../../../../components/atoms/loader/index.tsx'

type Premise = {
  id: string
  key: string
  label: string
  name: string
  value: string
}

export const DetailedInfoBlock = () => {
  const currentEstate = useAppSelector(selectCurrentEstate)
  console.log(currentEstate)
  const { t } = useTranslation()
  return (
    <div className="flex w-full flex-col gap-6 md:flex-row md:gap-10">
      {!!currentEstate?.premises.length && (
        <div className="flex w-full flex-col gap-1.5 md:w-[50%]">
          <H3
            text={t('real-estate.details.detail-info.premises.title')}
            className="pb-6 md:pb-10"
          />
          {currentEstate?.premises.map((premise: Premise) => (
            <div
              key={premise.id}
              className="flex w-full flex-col gap-1.5 md:flex-row"
            >
              <span className="bg-gray md:bg-light-gray2 min-h-9 w-full min-w-[6.75rem] rounded-sm px-3 py-1.5 text-base md:w-[10rem]">
                {t(premise.label)}
              </span>
              <div className="grid w-full grid-cols-[3fr_1fr] gap-1.5">
                <span className="bg-light-gray2 min-h-9 rounded-sm px-3 py-1.5 text-base">
                  {t(premise.name)}
                </span>
                <span className="bg-light-gray2 min-h-9 min-w-[5.875rem] rounded-sm px-3 py-1.5 text-base">
                  {premise.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex w-full flex-col gap-6 md:w-[50%] md:gap-10">
        {!!currentEstate?.equipments.length && (
          <Equipments
            title={t('real-estate.details.detail-info.equipments.title')}
            detailsArr={currentEstate.equipments}
          />
        )}
        {!!currentEstate?.fees.length && (
          <Conditions
            title={t('real-estate.details.detail-info.fees.title')}
            detailsArr={currentEstate.fees}
          />
        )}
        {!!currentEstate?.monthlyCosts.length && (
          <Conditions
            title={t('real-estate.details.detail-info.monthly_costs.title')}
            detailsArr={currentEstate.monthlyCosts}
          />
        )}
      </div>
    </div>
  )
}

interface ConditionsProps {
  title: string
  detailsArr: { title: string; descriptions: string }[]
}

const Conditions = ({ title, detailsArr }: ConditionsProps) => {
  const { t } = useTranslation()
  return (
    <div className="flex w-full flex-col gap-1.5">
      <H3 text={title} className="pb-6 md:pb-10" />
      {detailsArr.map((el, index) => {
        return (
          <div
            key={el.title + index}
            className="flex w-full flex-col gap-1.5 md:flex-row"
          >
            <span className="bg-gray md:bg-light-gray2 min-h-9 w-full min-w-[12.125rem] rounded-sm px-3 py-1.5 text-base md:w-[10rem]">
              {t(el.title)}
            </span>
            <span className="bg-light-gray2 min-h-9 w-full rounded-sm px-3 py-1.5 text-base">
              {t(el.descriptions)}
            </span>
          </div>
        )
      })}
    </div>
  )
}

interface EquipmentsProps {
  title: string
  detailsArr: { label: string; key: string; id: string; title: string }[]
}

const Equipments = ({ title, detailsArr }: EquipmentsProps) => {
  const [data, setData] = useState<Data[]>([])
  const { t } = useTranslation()

  const { execute: getEquipments, loading } = useAxiosHook<Data[]>(
    { url: '/equipments', method: 'GET' },
    { manual: true }
  )

  useEffect(() => {
    const fetchEquipments = async () => {
      const res = await getEquipments()
      if (res.data) {
        setData(res.data)
      }
    }
    fetchEquipments()
  }, [])

  if (loading) return <Loader />

  // Group and filter items by category
  const groupedEquipments = data.reduce(
    (acc, category) => {
      // Find matching items between category.data and detailsArr
      const matchingItems = category.data
        .map((categoryItem) => {
          const matchingDetail = detailsArr.find(
            (detail) => detail.id === categoryItem.id
          )
          return matchingDetail ? { ...categoryItem, ...matchingDetail } : null
        })
        .filter((item) => item !== null)

      // Only include category if it has matching items
      if (matchingItems.length > 0) {
        acc.push({
          id: category.id,
          key: category.key,
          title: category.title,
          items: matchingItems,
        })
      }
      return acc
    },
    [] as {
      id: string
      key: string
      title: string
      items: { label: string; id: string; key: string }[]
    }[]
  )

  return (
    <div className="flex w-full flex-col gap-1.5">
      <H3 text={title} className="pb-6 md:pb-10" />
      {groupedEquipments.map((category) => (
        <div
          key={category.id}
          className="flex w-full flex-col gap-1.5 md:flex-row"
        >
          <span className="bg-gray md:bg-light-gray2 min-h-9 w-full min-w-[12.125rem] rounded-sm px-3 py-1.5 text-base md:w-[10rem]">
            {t(category.title)}
          </span>
          <div className="bg-light-gray2 min-h-9 w-full rounded-sm px-3 py-1.5 text-base">
            {category.items.map((item, index) => (
              <span key={item.id}>
                {t(item.label)}
                {index < category.items.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
