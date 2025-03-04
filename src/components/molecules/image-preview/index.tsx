import React, { useMemo, useState } from 'react'
import { cn } from '../../../helpers/ui.ts'
import Button from '../../atoms/button'
import Icon from '../../atoms/icon'

interface IImagePreview {
  images: { id: string; src: string; title?: string }[];
  initialIndex?: number;
  width?: number;
  height?: number;
  withButtons?: boolean;
  onClick?: (currentIndex: number) => void;
}

const ImagePreview = (
  {
    images,
    initialIndex = 0,
    width = 760,
    height = 520,
    withButtons,
    onClick,
  }: IImagePreview) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const maxThumbnailWidth = 160
  const thumbnailWidth = Math.min(maxThumbnailWidth, width / 4 - 10)
  const thumbnailHeight = (thumbnailWidth * 109) / 160


  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const setCorrectIndexHandler = (index: number) => {
    onClick && onClick(index)
  }

  const visibleThumbnails = useMemo(() => {
    if (images.length > 4) {
      return images.slice(0, 3)
    }
    return images
  }, [images])

  return (
    <div className={cn('relative flex flex-col items-center')} style={{ maxWidth: width, width: '100%' }}>
      <div className="relative">
        <div className="rounded-xl overflow-hidden">
          <img
            src={images[currentIndex].src}
            alt={`Image ${currentIndex + 1}`}
            style={{
              width,
              maxHeight: height,
              height: '100%',
            }}
            className="object-cover w-full h-auto rounded-xl"
          />
          {withButtons && (
            <>
              <Button
                variant="outlined"
                className="absolute !border-white left-6 h-[48px] w-[48px] top-1/2 transform -translate-y-1/2  !rounded-full  "
                onClick={handlePrev}
              >
                <Icon
                  id="chevronDownIcon"
                  className="text-white rotate-90 h-[24px] w-[24px]"
                  onClick={handlePrev}
                />
              </Button>
              <Button
                variant="outlined"
                className="absolute !border-white right-6 h-[48px] w-[48px] top-1/2 transform -translate-y-1/2 !rounded-full "
                onClick={handleNext}
              >
                <Icon
                  id="chevronDownIcon"
                  className="text-white -rotate-90 h-[24px] w-[24px]"
                  onClick={handleNext}
                />
              </Button>
            </>
          )}
        </div>
      </div>
      <div className={cn('flex gap-4 mt-4 justify-between w-full')}>
        {visibleThumbnails.map((image, index) => (
          <div
            key={image.id}
            className={cn(
              'cursor-pointer transition-opacity duration-300  rounded-xl overflow-hidden',
              images[index] === images[currentIndex] ? 'border' : '',
            )}
            onClick={() => setCorrectIndexHandler(index)}
          >
            <img
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              style={{
                width: thumbnailWidth,
                maxHeight: thumbnailHeight,
                height: '100%',
              }}
              className="object-cover rounded-xl"
            />
          </div>
        ))}
        {images.length > 4 && (
          <div
            onClick={() => onClick && onClick(3)}
            className="relative cursor-pointer rounded-xl overflow-hidden flex items-center justify-center text-white bg-black/50"
            style={{
              width: thumbnailWidth,
              maxHeight: thumbnailHeight,
              height: '100%',
            }}
          >
            <img
              src={images[3].src}
              alt="More images"
              style={{
                width: thumbnailWidth,
                maxHeight: thumbnailHeight,
                height: '100%',
              }}
              className="object-cover  rounded-xl"
            />

            <Icon id="roundedPlusIcon" className="w-[48px] h-[48px] absolute text-white"/>
          </div>
        )}
      </div>
    </div>
  )
}

export default ImagePreview