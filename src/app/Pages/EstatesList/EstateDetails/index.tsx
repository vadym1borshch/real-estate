import { useAppSelector } from '../../../../store'
import { selectCurrentEstate } from '../../../../store/estateSlice/selectors.ts'
import ImagePreview from '../../../../components/molecules/image-preview'


const images = [
  {
    id: '1',
    src: '../../../../../public/house1.png?url',
  }, {
    id: '2',
    src: '../../../../../public/house2.png?url',
  }, {
    id: '3',
    src: '../../../../../public/house3.png?url',
  }, {
    id: '4',
    src: '../../../../../public/house4.png?url',
  }, {
    id: '5',
    src: '../../../../../public/house5.png?url',
  }, {
    id: '6',
    src: '../../../../../public/house6.png?url',
  }
]

export const EstatesDetails = () => {
  const estate = useAppSelector(selectCurrentEstate)

  return (
    <div>
     <ImagePreview images={images}  withButtons/>
    </div>
  )
}