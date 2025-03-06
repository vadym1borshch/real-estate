import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  spacing?: number
  slideWidth?: number
  slideHeight?: number
}

const Slider = ({
  children,
  spacing = 20,
  slideWidth,
  slideHeight,
}: Props) => {
  const [keenRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 'auto',
      spacing,
    },
    mode: 'free-snap',
    rubberband: false,
  })

  return (
    <div ref={keenRef} className="keen-slider pl-5">
      {React.Children.map(children, (child, index) => (
        <div
          key={'slide' + index}
          className="keen-slider__slide"
          style={{
            minWidth: slideWidth || '16.25rem',
            minHeight: slideHeight || '22.5rem',
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

export default Slider
