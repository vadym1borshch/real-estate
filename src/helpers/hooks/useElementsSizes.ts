import { useEffect, useState, RefObject } from 'react'

type Dimensions = 'width' | 'height';
type Style = 'gap' | Dimensions | string;

interface IUseElementsSizes {
  containerRef: RefObject<HTMLElement | null>;
  childClassName?: string;
  containerDimensionProp?: Dimensions;
  childDimensionProp?: Dimensions;
  styleAttr?: Style;
  exRerenderValue?: any;
}

export const useElementSizes = (
  {
    containerRef,
    childClassName,
    exRerenderValue,
    styleAttr = 'gap',
    containerDimensionProp = 'height',
    childDimensionProp = 'height',
  }: IUseElementsSizes) => {
  const [containerDimension, setContainerDimension] = useState(0)
  const [childDimension, setChildDimension] = useState(0)
  const [styleProp, setStyleProp] = useState<string | number>(0)
  const [childrenCount, setChildrenCount] = useState(0)

  const isNumericReturnStyle =
    styleAttr === 'width' || styleAttr === 'height' || styleAttr === 'gap'

  const updateSizes = () => {
    if (!containerRef.current) return

    const container = containerRef.current
    const children = childClassName
      ? container.getElementsByClassName(childClassName)
      : container.children
    const firstChild = children[0] as HTMLElement

    const dimensions = container.getBoundingClientRect()
    const styles = getComputedStyle(container)
    const result = styles[styleAttr]

    if (result) {
      if (isNumericReturnStyle) {
        setStyleProp(+result.match(/\d+/)?.[0] || 0)
      } else {
        setStyleProp(result)
      }
    }
    setContainerDimension(dimensions[containerDimensionProp])

    if (firstChild) {
      const childDimensions = firstChild.getBoundingClientRect()
      setChildDimension(childDimensions[childDimensionProp])
    }

    setChildrenCount(children.length)
  }

  useEffect(() => {
    updateSizes()

    const resizeObserver = new ResizeObserver(() => {
      updateSizes()
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => {
      resizeObserver.disconnect()
    }
  }, [exRerenderValue, containerDimensionProp, childDimensionProp, styleAttr])

  return { containerDimension, childDimension, styleProp, childrenCount }
}
