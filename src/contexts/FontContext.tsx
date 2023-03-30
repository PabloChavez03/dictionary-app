import { useState, createContext, useContext } from 'react'

interface Props {
  children: React.ReactNode
}

// tengo que hacer las fuentes
interface FontProps {
  isDark: boolean
  changeTheme: (value: boolean) => void
}
export const FontCTX = createContext<FontProps>({
  isDark: false,
  changeTheme: () => {}
})

export function FontContext ({ children }: Props): JSX.Element {
  const [isDark, setTheme] = useState(false)
  return (
    <FontCTX.Provider value={{ isDark, changeTheme: setTheme }}>
      {children}
    </FontCTX.Provider>
  )
}

export function useFontContext (): FontProps {
  const context = useContext(FontCTX)
  if (context === undefined) {
    throw new Error('useFontContext debería estar dentro de FontContext')
  }

  return context
}
