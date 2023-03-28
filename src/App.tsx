import styles from './App.module.css'
import Dictionary from './components/Dictionary'
import Header from './components/Header'

function App (): JSX.Element {
  return (
    <main className={styles.main}>
      <Header />
      <Dictionary />
    </main>
  )
}

export default App
