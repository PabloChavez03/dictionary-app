import { useState } from 'react'
import styles from './App.module.css'
import Dictionary from './components/Dictionary/Dictionary'
import Header from './components/Header/Header'
// import results from './mocks/WithResults.json'
import { useWord } from './hooks/useWord'
import { useThemeProvider } from './contexts/ThemeContext'
import { useFontProvider } from './contexts/FontContext'

function App (): JSX.Element {
  const [wordBySearch, setWordBySearch] = useState(() => {
    const wordBySearchLocalStorage = window.localStorage.getItem('word')
    return wordBySearchLocalStorage !== null ? JSON.parse(wordBySearchLocalStorage) : 'hello'
  })
  const [loading, setLoading] = useState(true)
  window.localStorage.setItem('word', JSON.stringify(wordBySearch))

  const { wordSearch } = useWord({ wordBySearch, setLoading })
  const { isDark } = useThemeProvider()
  const { fontFamily } = useFontProvider()

  let className = isDark ? `${styles.main} ${styles.dark}` : `${styles.main}`
  className += ` ${styles[fontFamily]}`

  return (
    <main className={className}>
      <Header searchWord={setWordBySearch}/>
      <Dictionary wordSearch={wordSearch} loading={loading}/>
    </main>
  )
}

export default App
