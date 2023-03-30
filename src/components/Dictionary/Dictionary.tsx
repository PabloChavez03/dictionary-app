import styles from './Dictionary.module.css'
import DictionaryDivider from '../DictionaryDivider/DictionaryDivider'
import { type WordProperties } from '../../types/types'
import DictionaryHeader from '../DictionaryHeader/DictionaryHeader'
import DictionaryBody from '../DictionaryBody/DictionaryBody'
import DictionaryFooter from '../DictionaryFooter/DictionaryFooter'
import Loader from '../Loader/Loader'
import Error404 from '../Error/Error404'

interface Props {
  wordSearch: WordProperties
  loading: boolean
}

const Dictionary = ({ wordSearch, loading }: Props): JSX.Element => {
  const { word, phonetics, meanings, sourceUrls } = wordSearch
  const phoneticsComplete = phonetics?.filter(
    (el) => el.text !== undefined && el.audio !== undefined && el.audio !== ''
  )[0]
  const meaningsSlice = meanings?.slice(0, 2)

  return (
    <section className={styles.section}>
      {loading
        ? (
        <Loader />
          )
        : !Array.isArray(wordSearch)
            ? (
        <>
          <main className={styles.main}>
            <DictionaryHeader word={word} phonetics={phoneticsComplete} />
            <DictionaryBody meanings={meaningsSlice} />
          </main>
          <DictionaryDivider />
          <DictionaryFooter sources={sourceUrls} />
        </>
              )
            : (
        <Error404 />
              )}
    </section>
  )
}

export default Dictionary
