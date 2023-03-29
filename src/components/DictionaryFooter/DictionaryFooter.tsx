import ExternalLink from '../../assets/icons/ExternalLink'
import { type WordProperties } from '../../types/types'
import styles from './DictionaryFooter.module.css'

interface Props {
  sources: WordProperties['sourceUrls']
}

const DictionaryFooter = ({ sources }: Props): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <span>Source</span>
      <a href={sources?.[0]}>
      {sources?.[0]} <ExternalLink />
      </a>
    </footer>
  )
}

export default DictionaryFooter
