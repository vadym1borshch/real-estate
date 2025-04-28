import { ComponentType, ReactNode, useMemo } from 'react'
import H3 from '../../../components/atoms/typography/h3'
import { cn } from '../../../helpers/ui.ts'

interface ITitleComponent {
  text: string
  className?: string
}

interface Props {
  title: string
  description: string
  className?: string
  titleClassName?: string
  descriptionsClassName?: string
  children?: ReactNode
  Component?: ComponentType<ITitleComponent>
}

export const DescriptionsParagraph = ({
  title,
  description,
  titleClassName,
  descriptionsClassName,
  className,
  children,
  Component,
}: Props) => {
  const TitleComponent = useMemo(() => {
    if (Component) {
      return ({ text, className }: ITitleComponent) => (
        <Component text={text} className={className} />
      )
    }
    return ({ text, className }: ITitleComponent) => (
      <H3 className={className} text={text} />
    )
  }, [Component])

  return (
    <div className={cn('flex w-full flex-col items-center gap-6', className)}>
      <TitleComponent
        text={title}
        className={cn('w-[200px] text-center', titleClassName)}
      />
      <p className={cn('max-w-[47.5rem] text-center', descriptionsClassName)}>
        {description}
      </p>
      {children}
    </div>
  )
}
