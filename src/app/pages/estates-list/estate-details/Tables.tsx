import Table from '../../../../components/molecules/table'
import Icon from '../../../../components/atoms/icon'
import { extractValuesToTable } from './helpers.ts'
import { estateFullDetails } from './mock.ts'
import { useWindowDimensions } from '../../../../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../../../../@constants'
import { RealEstate } from '../../../../store/estateSlice'
import useTranslationSearch from '../../../../helpers/hooks/useTranslationSearch.ts'
import { cn } from '../../../../helpers/ui.ts'

interface Props {
  estate: RealEstate
}

export const Tables = ({ estate }: Props) => {
  const { width } = useWindowDimensions()
  const isTablet = width >= BREAKPOINTS.MD
  const { getTranslationByKey } = useTranslationSearch()
  const updatedEstateDetails = extractValuesToTable(
    estateFullDetails,
    estate
  ).filter((el) => Boolean(el.value))

  const dividedList = updatedEstateDetails.slice(
    0,
    Math.ceil(updatedEstateDetails.length / 2)
  )
  const secondPartList = updatedEstateDetails.slice(dividedList.length)

  const convertLabel = (key: string, value: string) => {
    if (key === 'rooms') {
      return `${value} Zimmer`
    }
    if (key === 'landAreaM2' || key === 'livingAreaM2') {
      return `${value} m²`
    }
    if (key === 'floors') {
      return `${value} Stockwerk`
    }

    return `${getTranslationByKey(value as string)}`
  }

  return (
    <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-[1fr_1fr] md:items-start">
      <Table
        className="my-[6.25rem] lg:my-[9.375rem]"
        tableRows={(isTablet ? dividedList : updatedEstateDetails).map(
          (row) => {
            return (
              <tr
                key={row.id}
                className="border-blue-gray border-b last-of-type:border-0"
              >
                <td className="w-6 py-3 pl-6">
                  <Icon id={row.iconId} className="h-6 w-6" />
                </td>
                <td className="py-3 pl-3">
                  <span
                    className={cn('flex items-center', {
                      capitalize:
                        row.key !== 'landAreaM2' && row.key !== 'livingAreaM2',
                    })}
                  >
                    {convertLabel(row.key, row.value as string)}
                  </span>
                </td>
              </tr>
            )
          }
        )}
      />

      <Table
        className="my-[6.25rem] hidden md:block lg:my-[9.375rem]"
        tableRows={secondPartList.map((row) => {
          return (
            <tr
              key={row.id}
              className="border-blue-gray border-b last-of-type:border-0"
            >
              <td className="w-6 py-3 pl-6">
                <Icon id={row.iconId} className="h-6 w-6" />
              </td>
              <td className="py-3 pl-3">
                <span
                  className={cn('flex items-center', {
                    capitalize:
                      row.key !== 'landAreaM2' && row.key !== 'livingAreaM2',
                  })}
                >
                  {convertLabel(row.key, row.value as string)}
                </span>
              </td>
            </tr>
          )
        })}
      />
    </div>
  )
}
