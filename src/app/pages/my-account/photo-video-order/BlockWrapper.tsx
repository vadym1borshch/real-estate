import { ReactNode } from 'react'
import H3 from '../../../../components/atoms/typography/h3'

interface Props {
  children: ReactNode
  title: string
  className?: string
}

export const BlockWrapper = ({ children, title, className }: Props) => {
  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <H3 text={title} />
      <div className={className}>{children}</div>
    </div>
  )
}
