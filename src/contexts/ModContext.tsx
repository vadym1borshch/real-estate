import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react'

export type Mode = 'default' | 'map'

interface ModeContextProps {
  mode: Mode
  setMode: (mode: Mode) => void
}

const ModeContext = createContext<ModeContextProps | undefined>(undefined)

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<Mode>('default')

  useEffect(() => {
    const mode = localStorage.getItem('mode')
    if (mode) {
      setMode(mode as Mode)
    }
  }, [])

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  )
}

export const useMode = (): ModeContextProps => {
  const context = useContext(ModeContext)
  if (!context) {
    throw new Error('useMode must be used within a ModeProvider')
  }
  return context
}
