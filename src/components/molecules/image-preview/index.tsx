import { useMemo, useState } from 'react'
import { cn } from '../../../helpers/ui.ts'
import Icon from '../../atoms/icon'
import { ButtonsBlock } from './ButtonsBlock.tsx'
import { estateImage } from '../../../store/estateSlice'
import { useWindowDimensions } from '../../../helpers/hooks/useWindowDimensions.ts'
import { BREAKPOINTS } from '../../../@constants'

interface IImagePreview {
  images: estateImage[]
  initialIndex?: number
  width?: number
  height?: number
  withButtons?: boolean
  onClick?: (currentIndex: number) => void
}

const ImagePreview = ({
  images,
  initialIndex = 0,
  width = 760,
  height = 520,
  withButtons,
  onClick,
}: IImagePreview) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }
  const {width: windowWidth} = useWindowDimensions()
  const isLarge = windowWidth >= BREAKPOINTS.LG

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const setCorrectIndexHandler = (index: number) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    onClick && onClick(index)
  }

  const visibleThumbnails = useMemo(() => {
    if (images.length > 4) {
      return images.slice(0, 3)
    }
    return images
  }, [images])

  return (
    <div
      className={cn('relative flex flex-col items-center')}
      style={{ maxWidth: width, width: '100%' }}
    >
      <div className="relative">
        <div className="overflow-hidden rounded-xl">
          <img
            src={images[currentIndex].url}
            alt={`Image ${currentIndex + 1}`}
            style={{
              width,
              maxHeight: isLarge ? height: "60vw",
              height: '60vw',
            }}
            className="h-auto w-full rounded-xl object-cover"
          />
          {withButtons && (
            <ButtonsBlock handleNext={handleNext} handlePrev={handlePrev} />
          )}
        </div>
      </div>
      <div
        className={cn(
          'grid w-full grid-cols-2 gap-6 py-5 sm:grid-cols-4 md:grid-cols-2 md:pb-0 lg:grid-cols-4'
        )}
      >
        {visibleThumbnails.map((image, index) => (
          <div
            key={image.id}
            className={cn(
              'cursor-pointer overflow-hidden rounded-xl transition-opacity duration-300',
              images[index] === images[currentIndex] ? 'border' : ''
            )}
            onClick={() => setCorrectIndexHandler(index)}
          >
            <img
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              className="h-[6.8125rem] w-full rounded-xl object-cover"
            />
          </div>
        ))}

        {images.length > 4 && (
          <div
            onClick={() => onClick && onClick(3)}
            className="relative flex h-[6.8125rem] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-black/50 text-white"
          >
            <img
              src={images[3].url}
              alt="More images"
              className="h-[6.8125rem] w-full rounded-xl object-cover"
            />

            <Icon
              id="roundedPlusIcon"
              className="absolute h-[48px] w-[48px] text-white"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ImagePreview
