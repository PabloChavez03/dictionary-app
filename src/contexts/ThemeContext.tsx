import { useState, createContext, useContext } from 'react'

interface Props {
  children: React.ReactNode
}
interface ThemeProps {
  isDark: boolean
  changeTheme: (value: boolean) => void
}
export const ThemeCTX = createContext<ThemeProps>({
  isDark: false,
  changeTheme: () => {}
})

export function ThemeProvider ({ children }: Props): JSX.Element {
  const [isDark, setTheme] = useState(false)
  return (
    <ThemeCTX.Provider value={{ isDark, changeTheme: setTheme }}>
      {children}
    </ThemeCTX.Provider>
  )
}

export function useThemeProvider (): ThemeProps {
  const context = useContext(ThemeCTX)
  if (context === undefined) {
    throw new Error('useThemeProvider debería estar dentro de ThemeProvider')
  }

  return context
}
