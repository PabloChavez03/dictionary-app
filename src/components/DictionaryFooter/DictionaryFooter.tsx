import ExternalLink from '../../assets/icons/ExternalLink'
import { useFontProvider } from '../../contexts/FontContext'
import { useThemeProvider } from '../../contexts/ThemeContext'
import { type WordProperties } from '../../types/types'
import styles from './DictionaryFooter.module.css'

interface Props {
  sources: WordProperties['sourceUrls']
}

const DictionaryFooter = ({ sources }: Props): JSX.Element => {
  const { isDark } = useThemeProvider()
  const { fontFamily } = useFontProvider()
  return (
    <footer className={styles.footer}>
      <span style={{ color: isDark ? '#BFBFBF' : 'rgb(100,100,100)' }}>Source</span>
      <a href={sources?.[0]} style={{ fontSize: fontFamily === 'mono' ? 12 : 16 }}>
      {sources?.[0]} <ExternalLink />
      </a>
    </footer>
  )
}

export default DictionaryFooter
