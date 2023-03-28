import Play from '../assets/icons/Play'
import styles from './Dictionary.module.css'

const Dictionary = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <main className={styles.main}>
        <div className={styles.dictionaryHeader}>
          <div className={styles.keyboardAndSpan}>
            <h1>keyboard</h1>
            <span>/`ki:bc:d/</span>
          </div>
          <div className={styles.playButtonContainer}>
            <button className={styles.playButton}><Play size={32}/></button>
          </div>
        </div>
        <div className={styles.dictionaryBody}>body</div>
      </main>
      <footer className={styles.footer}></footer>
    </section>
  )
}

export default Dictionary
