import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  text: string
}

export const ModalChildWrapper = ({ children, text }: Props) => {
  return (
    <div className="flex flex-col items-center gap-12">
      <p className="text-center">{text}</p>
      <div className="flex items-center justify-center gap-6">{children}</div>
    </div>
  )
}