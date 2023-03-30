import Play from '../../assets/icons/Play'
import { type Phonetic, type WordProperties } from '../../types/types'
import styles from './DictionaryHeader.module.css'

interface Props {
  word: WordProperties['word']
  phonetics?: Phonetic
}

const DictionaryHeader = ({ phonetics, word }: Props): JSX.Element => {
  const handleAudio = async (): Promise<void> => {
    const audioElement = new Audio(phonetics?.audio)
    await audioElement.play()
  }
  return (
    <div className={styles.dictionaryHeader}>
      <div className={styles.keyboardAndSpan}>
        <h1>{word}</h1>
        {phonetics?.text !== undefined && <span>{phonetics?.text}</span>}
      </div>
      <div className={styles.playButtonContainer}>
        <button
          className={phonetics?.audio !== undefined ? styles.playButton : styles.playButtonDisabled}
          onClick={handleAudio}
          disabled={phonetics?.audio === undefined}
        >
          <Play size={32} />
        </button>
      </div>
    </div>
  )
}

export default DictionaryHeader
