import { useState } from 'react'
import styles from './App.module.css'
import Dictionary from './components/Dictionary/Dictionary'
import Header from './components/Header/Header'
// import results from './mocks/WithResults.json'
import { useWord } from './hooks/useWord'
import { useThemeProvider } from './contexts/ThemeContext'

function App (): JSX.Element {
  const [wordBySearch, setWordBySearch] = useState('hello')
  const [loading, setLoading] = useState(true)

  const { wordSearch } = useWord({ wordBySearch, setLoading })
  const { isDark } = useThemeProvider()

  const className = isDark ? `${styles.main} ${styles.dark}` : `${styles.main}`

  return (
    <main className={className}>
      <Header searchWord={setWordBySearch}/>
      <Dictionary wordSearch={wordSearch} loading={loading}/>
    </main>
  )
}

export default App
