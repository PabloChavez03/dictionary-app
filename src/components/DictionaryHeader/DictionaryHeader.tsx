import Play from '../../assets/icons/Play/Play'
import { type Phonetic, type WordProperties } from '../../types/types'
import styles from './DictionaryHeader.module.css'
import Pause from '../../assets/icons/Pause/Pause'
import { useAudio } from '../../hooks/useAudio'

interface Props {
  word: WordProperties['word']
  phonetics?: Phonetic
}

const DictionaryHeader = ({ phonetics, word }: Props): JSX.Element => {
  const { audio, stateAudio, toggleAudio } = useAudio(phonetics)

  const durationPlayed = (): number => {
    return setTimeout(() => {
      toggleAudio(false)
    }, audio.duration + 500)
  }

  const clearDurationPlayed = (): void => {
    clearTimeout(durationPlayed())
  }

  const handlePlayAudio = async (): Promise<void> => {
    toggleAudio(true)
    await audio.play()
    durationPlayed()
  }

  const handlePauseAudio = (): void => {
    toggleAudio(false)
    audio.pause()
    clearDurationPlayed()
  }

  return (
    <div className={styles.dictionaryHeader}>
      <div className={styles.keyboardAndSpan}>
        <h1>{word}</h1>
        {phonetics?.text !== undefined && <span>{phonetics?.text}</span>}
      </div>
      <div className={styles.playButtonContainer}>
        <button
          className={audio !== undefined ? styles.playButton : styles.playButtonDisabled}
          onClick={!stateAudio ? handlePlayAudio : handlePauseAudio}
          disabled={audio === undefined}
        >
          {!stateAudio ? <Play /> : <Pause />}
        </button>
      </div>
    </div>
  )
}

export default DictionaryHeader
