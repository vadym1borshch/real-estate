import Table from '../../../../components/molecules/table'
import Icon from '../../../../components/atoms/icon'
import { extractValuesToTable } from './helpers.ts'
import { estateFullDetails } from './mock.ts'
import { useWindowDimensions } from '../../../../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../../../../@constants'
import { RealEstate } from '../../../../store/estateSlice'

interface Props {
  estate: RealEstate
}

export const Tables = ({ estate }: Props) => {
  const { width } = useWindowDimensions()
  const isTablet = width >= BREAKPOINTS.MD

  const updatedEstateDetails = extractValuesToTable(
    estateFullDetails,
    estate
  ).filter((el) => Boolean(el.value))

  const dividedList = updatedEstateDetails.slice(
    0,
    Math.ceil(updatedEstateDetails.length / 2)
  )
  const secondPartList = updatedEstateDetails.slice(dividedList.length)

  return (
    <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-[1fr_1fr] md:items-start">
      <Table
        className="my-[6.25rem] lg:my-[9.375rem]"
        tableRows={(isTablet ? dividedList : updatedEstateDetails).map(
          (row) => (
            <tr
              key={row.id}
              className="border-blue-gray border-b last-of-type:border-0"
            >
              <td className="w-6 py-3 pl-6">
                <Icon id={row.iconId} className="h-6 w-6" />
              </td>
              <td className="py-3 pl-3">
                <span className="flex items-center">
                  {row.key === 'rooms'? `${row.value} Zimmer` : row.value as string}
                </span>
              </td>
            </tr>
          )
        )}
      />

      <Table
        className="my-[6.25rem] lg:my-[9.375rem] hidden md:block"
        tableRows={secondPartList.map((row) => (
          <tr
            key={row.id}
            className="border-blue-gray border-b last-of-type:border-0"
          >
            <td className="w-6 py-3 pl-6">
              <Icon id={row.iconId} className="h-6 w-6" />
            </td>
            <td className="py-3 pl-3">
              <span className="flex items-center">
                {row.key === 'rooms' ? `${row.value} Zimmer` : row.value as string}
              </span>
            </td>
          </tr>
        ))}
      />
    </div>
  )
}
