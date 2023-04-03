import { useState, createContext, useContext } from 'react'
import { type FontValue } from '../constants/FontValue'

interface Props {
  children: React.ReactNode
}

// tengo que hacer las fuentes

interface FontValues {
  fontFamily: keyof typeof FontValue
}
interface FontType {
  fontFamily: FontValues['fontFamily']
  changeFont: (value: FontValues['fontFamily']) => void
}
export const FontCTX = createContext<FontType>({
  fontFamily: 'serif',
  changeFont: () => {}
})

export function FontProvider ({ children }: Props): JSX.Element {
  const [fontFamily, setFont] = useState<FontValues['fontFamily']>(() => {
    const fontFamilyLocalStorage = window.localStorage.getItem('font')
    return fontFamilyLocalStorage !== null ? JSON.parse(fontFamilyLocalStorage) : 'serif'
  })

  window.localStorage.setItem('font', JSON.stringify(fontFamily))

  return (
    <FontCTX.Provider value={{ fontFamily, changeFont: setFont }}>
      {children}
    </FontCTX.Provider>
  )
}

export function useFontProvider (): FontType {
  const context = useContext(FontCTX)
  if (context === undefined) {
    throw new Error('useFontProvider debería estar dentro de FontProvider')
  }

  return context
}
