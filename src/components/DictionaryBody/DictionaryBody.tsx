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
        {NOUNS !== undefined && <Nouns nouns={NOUNS} />}
        {VERBS !== undefined && <Verbs verbs={VERBS} />}
      </div>
    </>
  )
}

export default DictionaryBody
