import { ReactNode } from 'react'
import { cn } from '../../../helpers/ui.ts'

interface Props {
  tableHead?: string[]
  tableRows: ReactNode
  className?: string
}

const Table = ({ tableHead, tableRows, className }: Props) => {
  return (
    <div
      className={cn(
        'border-blue-gray w-full table-auto rounded-lg border',
        className
      )}
    >
      <table className="w-full text-left">
        {tableHead && (
          <thead className="border-b">
            <tr>
              {tableHead.map((head) => (
                <th key={head}>
                  <span>{head}</span>
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  )
}

export default Table
