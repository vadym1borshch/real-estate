import H2 from '../../../../components/atoms/typography/h2'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  title: string
  description: string
}

const MainBlock = ({ children, title, description }: Props) => {
  return (
    <div className="flex flex-col items-center w-full z-10 ">
      <div className="flex flex-col items-center max-w-[47.5rem] gap-6">
        <H2 text={title} className="text-center max-w-[35rem] text-2xl lg:text-4xl" />
        <p className="text-center w-full">{description}</p>
      </div>
      {children}
    </div>
  )
}

export default MainBlock