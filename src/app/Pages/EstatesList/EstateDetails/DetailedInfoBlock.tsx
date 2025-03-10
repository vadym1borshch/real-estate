import H3 from '../../../../components/atoms/typography/h3'
import { equipments, fees, monthly_costs, premises } from './mock.ts'
import { useTranslation } from 'react-i18next'

export const DetailedInfoBlock = () => {
  const { t } = useTranslation()
  return (
    <div className="flex w-full flex-col gap-6 md:flex-row md:gap-10">
      <div className="flex w-full flex-col gap-1.5 md:w-[50%]">
        <H3 text={t('real-estate.details.detail-info.premises.title')} className="pb-6 md:pb-10" />
        {premises.map((premise, index) => (
          <div
            key={premise.title + index}
            className="flex w-full flex-col gap-1.5 md:flex-row"
          >
            <span className="bg-gray md:bg-light-gray2 min-h-9 w-full min-w-[6.75rem] rounded-sm px-3 py-1.5 text-base md:w-[10rem]">
              {t(premise.title)}
            </span>
            <div className="grid w-full grid-cols-[3fr_1fr] gap-1.5">
              <span className="bg-light-gray2 min-h-9 rounded-sm px-3 py-1.5 text-base">
                {t(premise.descriptions)}
              </span>
              <span className="bg-light-gray2 min-h-9 min-w-[5.875rem] rounded-sm px-3 py-1.5 text-base">
                {premise.value}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full flex-col gap-6 md:w-[50%] md:gap-10">
        <Conditions title={t('real-estate.details.detail-info.equipments.title')} detailsArr={equipments} />
        <Conditions title={t('real-estate.details.detail-info.fees.title')} detailsArr={fees} />
        <Conditions title={t('real-estate.details.detail-info.monthly_costs.title')} detailsArr={monthly_costs} />
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
      {detailsArr.map((el, index) => (
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
      ))}
    </div>
  )
}
