import styles from './DictionaryBody.module.css'
import DictionaryDivider from '../DictionaryDivider/DictionaryDivider'
import { type Definition, type Meaning } from '../../types/types'
import { useThemeProvider } from '../../contexts/ThemeContext'
import { useState } from 'react'
// import ShowMore from '../ShowMore/ShowMore'

interface Props {
  meanings: Meaning[]
}

const DictionaryBody = ({ meanings }: Props): JSX.Element => {
  const { isDark } = useThemeProvider()
  const [limitByMeaning, setLimitByMeaning] = useState<number>(8)

  const handleClick = (meanings: Definition[]): void => {
    const multiplesOfEight =
      (meanings.length - limitByMeaning) % limitByMeaning === 0 &&
      meanings.length - limitByMeaning < limitByMeaning

    if (multiplesOfEight) {
      setLimitByMeaning((prev) => prev + 8)
    }
  }

  return (
    <>
      {meanings?.map((meaning) => {
        const cleanMeanings = meaning.definitions.filter(
          (def) => def.definition.length >= 3
        )
        const isMinEightMeanings = cleanMeanings.length < 8
        const meaningsByBody = isMinEightMeanings
          ? cleanMeanings
          : cleanMeanings.slice(0, limitByMeaning)

        return (
          <div className={styles.dictionaryBody} key={meaning.partOfSpeech}>
            <DictionaryDivider text={meaning.partOfSpeech} />
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
                onClick={() => {
                  handleClick(meaningsByBody)
                }}
              >
                {limitByMeaning > meaningsByBody.length
                  ? 'Show less'
                  : 'Show more'}
              </button>
              {/* <ShowMore hidden={isMinEightMeanings} changeLimit={setLimitByMeaning} limit={limitByMeaning}/> */}
            </div>
            {meaning.synonyms !== undefined && (
              <div className={styles.synonymsStyle}>
                <h2 style={{ color: isDark ? '#BFBFBF' : 'rgb(100,100,100)' }}>
                  Synonyms
                </h2>
                {meaning.synonyms?.length !== 0 &&
                  meaning.synonyms?.map((sys) => <span key={sys}>{sys}</span>)}
              </div>
            )}
          </div>
        )
      })}
    </>
  )
}

export default DictionaryBody
