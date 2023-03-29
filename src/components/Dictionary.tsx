import DividerHorizontal from '../assets/icons/DividerHorizontal'
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
            <button className={styles.playButton}>
              <Play size={32} />
            </button>
          </div>
        </div>
        <div className={styles.dictionaryDivider}>
          <strong>noun</strong>
          <DividerHorizontal />
          <div />
        </div>
        <div className={styles.dictionaryBody}>
          <div className={styles.meaning}>
            <h2>Meaning</h2>
            <ul>
              <li>
                <span>(etc.) A set of keys used to operate a typewriter, computer etc.</span>
              </li>
              <li>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet neque vitae asperiores commodi aperiam illum, ipsum, temporibus unde sed libero, molestias assumenda ducimus deleniti totam minus. Animi facere consequatur amet.</span>
              </li>
              <li><span>lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet neque vitae asperiores commodi aperiam illum, ipsum, temporibus unde sed libero, molestias assumend</span></li>
            </ul>
          </div>
          <div className={styles.synonyms}>
            <h2>Synonyms</h2>
          </div>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </section>
  )
}

export default Dictionary
