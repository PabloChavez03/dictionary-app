import { useState } from 'react'
import { useThemeProvider } from '../../contexts/ThemeContext'
import { type Meaning } from '../../types/types'
import DictionaryDivider from '../DictionaryDivider/DictionaryDivider'
import styles from './DictionaryBody.module.css'

interface Props {
  verbs: Meaning
}

const Verbs = ({ verbs }: Props): JSX.Element => {
  const [limitByMeaning, setLimitByMeaning] = useState<number>(8)
  const { isDark } = useThemeProvider()

  const cleanMeanings = verbs.definitions.filter(
    (def) => def.definition.length >= 3
  )
  const isMinEightMeanings = cleanMeanings.length < 8
  const meaningsByBody = isMinEightMeanings
    ? cleanMeanings
    : cleanMeanings.slice(0, limitByMeaning)

  const handleAddMore = (): void => {
    setLimitByMeaning((prev) => prev + 8)
  }

  const handleResetMeanings = (): void => {
    setLimitByMeaning(8)
  }

  return (
    <>
      <DictionaryDivider text={verbs.partOfSpeech} />
      <div className={styles.meaningStyle}>
        <h2 style={{ color: isDark ? '#BFBFBF' : 'rgb(100,100,100)' }}>
          Meaning
        </h2>
        <ul>
          {meaningsByBody.map((def) => (
            <li key={def.definition}>
              <span>{def.definition}</span>
            </li>
          ))}
        </ul>
        <button
          hidden={isMinEightMeanings}
          onClick={
            limitByMeaning > meaningsByBody.length
              ? handleResetMeanings
              : handleAddMore
          }
        >
          {limitByMeaning > meaningsByBody.length ? 'Show less' : 'Show more'}
        </button>
        {/* <ShowMore hidden={isMinEightMeanings} changeLimit={setLimitByMeaning} limit={limitByMeaning}/> */}
      </div>

      {verbs.synonyms !== undefined && (
        <div className={styles.synonymsStyle}>
          <h2 style={{ color: isDark ? '#BFBFBF' : 'rgb(100,100,100)' }}>
            Synonyms
          </h2>
          {verbs.synonyms?.length !== 0 &&
            verbs.synonyms?.map((sys) => <span key={sys}>{sys}</span>)}
        </div>
      )}
    </>
  )
}

export default Verbs
