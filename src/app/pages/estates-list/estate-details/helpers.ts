import { EstateDetails } from './mock.ts'
import { RealEstate } from '../../../../store/estateSlice'

export const extractValuesToTable = (
  detailsArray: EstateDetails[],
  dataObject: RealEstate
) => {
  return detailsArray.map((detail) => {

    return { ...detail,


      value: dataObject[detail.key as keyof RealEstate]
    }
  })
}

export const scrollToPageBlock = (blockId: string, container?: HTMLElement | null) => {
  const target = document.getElementById(blockId)
  if (!target) return

  if (container) {
    const top = target.offsetTop - container.offsetTop
    container.scrollTo({ top, behavior: 'smooth' })
  } else {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}