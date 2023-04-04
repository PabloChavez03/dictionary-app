// import { useState } from 'react'
import { useFontProvider } from '../../contexts/FontContext'
import { type FontValue } from '../../constants/FontValue'
import styles from './Font.module.css'
import { useThemeProvider } from '../../contexts/ThemeContext'

const fonts: Array<{ label: string, value: keyof typeof FontValue }> = [
  {
    label: 'Serif',
    value: 'serif'
  },
  {
    label: 'Sans-Serif',
    value: 'sansSerif'
  },
  {
    label: 'Monospace',
    value: 'mono'
  }
]

const Font = (): JSX.Element => {
  const { fontFamily, changeFont } = useFontProvider()
  const { isDark } = useThemeProvider()
  const currentFont = fonts.find((font) => font.value === fontFamily)
  const othersFont = fonts.filter((font) => font.value !== fontFamily)

  return (
    <div className={styles.fontContainer}>
      <h1 className={styles.fontHeading}>{currentFont?.label}</h1>
      <ul className={styles.fontList} style={{ backgroundColor: isDark ? 'rgb(15 23 42)' : 'var(--background-color)' }}>
        {othersFont.length !== 0 &&
          othersFont.map((el) => <li key={el.value} onClick={() => { changeFont(el.value) }}>{el.label}</li>)}
      </ul>
    </div>
  )
}

export default Font
