import styles from './DictionaryBody.module.css'
import { type Meaning } from '../../types/types'
import Nouns from './Nouns'
import Verbs from './Verbs'

interface Props {
  meanings: Meaning[]
}

const DictionaryBody = ({ meanings }: Props): JSX.Element => {
  const [NOUNS, VERBS] = meanings

  return (
    <>
      <div className={styles.dictionaryBody}>
        <Nouns nouns={NOUNS} />
        <Verbs verbs={VERBS} />
      </div>
    </>
  )
}

export default DictionaryBody
