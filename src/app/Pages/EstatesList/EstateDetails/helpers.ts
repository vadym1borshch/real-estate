import { EstateDetails } from './mock.ts'
import { RealEstate } from '../../../../store/commonMock.ts'

export const extractValuesToTable = (
  detailsArray: EstateDetails[],
  dataObject: RealEstate
) => {
  return detailsArray.map((detail) => {
    const keys = detail.key.split('.')
    let value: string | null | RealEstate = dataObject

    for (const k of keys) {
      if (typeof value === 'object' && value !== null && k in value) {
        value = (value as never)[k]
      } else {
        value = null
        break
      }
    }

    if (typeof value === 'object' && value !== null) {
      value = JSON.stringify(value)
    }

    return { ...detail, value }
  })
}

export const scrollToPageBlock = (blockId: string) => {
  const target = document.getElementById(blockId)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}