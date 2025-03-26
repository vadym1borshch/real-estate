import { createContext, useContext, useState, ReactNode } from 'react'

interface Props {
  isConfirm: boolean
  setIsConfirm: (value: boolean) => void
}

const ConfirmationEmailContext = createContext<Props | undefined>(undefined)

export const ConfirmProvider = ({ children }: { children: ReactNode }) => {
  const [isConfirm, setIsConfirm] = useState(false)

  return (
    <ConfirmationEmailContext.Provider value={{ isConfirm, setIsConfirm }}>
      {children}
    </ConfirmationEmailContext.Provider>
  )
}

export const useEmailConfirm = (): Props => {
  const context = useContext(ConfirmationEmailContext)
  if (!context) {
    throw new Error('useEmailConfirm must be used within a ConfirmProvider')
  }
  return context
}
