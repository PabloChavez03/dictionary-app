import styles from './Dictionary.module.css'
import DictionaryDivider from '../DictionaryDivider/DictionaryDivider'
import { type WordProperties } from '../../types/types'
import DictionaryHeader from '../DictionaryHeader/DictionaryHeader'
import DictionaryBody from '../DictionaryBody/DictionaryBody'
import DictionaryFooter from '../DictionaryFooter/DictionaryFooter'

interface Props {
  wordSearch: WordProperties
}

const Dictionary = ({ wordSearch }: Props): JSX.Element => {
  const { word, phonetics, meanings, sourceUrls } = wordSearch
  const phoneticsComplete = phonetics.filter(el => el.text !== undefined && el.audio !== undefined)[0]
  const meaningsSlice = meanings.slice(0, 2)

  return (
    <section className={styles.section}>
      <main className={styles.main}>
        <DictionaryHeader word={word} phonetics={phoneticsComplete}/>
        <DictionaryBody meanings={meaningsSlice}/>
      </main>
      <DictionaryDivider />
      <DictionaryFooter sources={sourceUrls}/>
    </section>
  )
}

export default Dictionary
