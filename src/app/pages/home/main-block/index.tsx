import H2 from '../../../../components/atoms/typography/h2'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  title: string
  description: string
}

const MainBlock = ({ children, title, description }: Props) => {
  return (
    <div className="z-10 flex w-full flex-col items-center">
      <div className="flex max-w-[47.5rem] flex-col items-center gap-6">
        <H2
          text={title}
          className="max-w-[35rem] text-center text-2xl lg:text-4xl"
        />
        <p className="w-full text-center">{description}</p>
      </div>
      {children}
    </div>
  )
}

export default MainBlock
