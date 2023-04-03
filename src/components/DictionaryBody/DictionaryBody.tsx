import styles from './DictionaryBody.module.css'
import DictionaryDivider from '../DictionaryDivider/DictionaryDivider'
import { type Meaning } from '../../types/types'
import { useThemeProvider } from '../../contexts/ThemeContext'

interface Props {
  meanings: Meaning[]
}

const DictionaryBody = ({ meanings }: Props): JSX.Element => {
  const { isDark } = useThemeProvider()
  return (
    <>
      {meanings?.map((meaning) => (
        <div className={styles.dictionaryBody} key={meaning.partOfSpeech}>
          <DictionaryDivider text={meaning.partOfSpeech} />
          <div className={styles.meaningStyle}>
            <h2 style={{ color: isDark ? '#BFBFBF' : 'rgb(100,100,100)' }}>Meaning</h2>
            <ul>
              {meaning.definitions.map((def) => (
                <li key={def.definition}>
                  {def.definition.length !== 0 && <span>{def.definition}</span>}
                </li>
              ))}
            </ul>
          </div>
          {meaning.synonyms !== undefined && (
            <div className={styles.synonymsStyle}>
              <h2 style={{ color: isDark ? '#BFBFBF' : 'rgb(100,100,100)' }}>Synonyms</h2>
              {meaning.synonyms?.length !== 0 &&
                meaning.synonyms?.map((sys) => <span key={sys}>{sys}</span>)}
            </div>
          )}
        </div>
      ))}
    </>
  )
}

export default DictionaryBody
