import { useState } from 'react'
import styles from './Header.module.css'
import Dictionary from '../../assets/icons/Dictionary'
import DividerVertical from '../../assets/icons/DividerVertical'
import Arrow from '../../assets/icons/Arrow'
import Moon from '../../assets/icons/Moon'
import Search from '../../assets/icons/Search'
import Toggle from './Toggle'
import { useThemeProvider } from '../../contexts/ThemeContext'
import { useFontProvider } from '../../contexts/FontContext'
import Sun from '../../assets/icons/Sun'
import Font from './Font'

interface Props {
  searchWord: (word: string) => void
}

const Header = ({ searchWord }: Props): JSX.Element => {
  // const [font, setFont] = useState({
  //   serif: 'serif',
  //   sansSerif: 'ssans-serif',
  //   monospace: 'monospace'
  // })

  const [searchInput, setSearchInput] = useState('')
  const { isDark } = useThemeProvider()
  const { fontFamily } = useFontProvider()
  console.log(fontFamily)

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const value = evt.target.value
    setSearchInput(value)
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>, word: string): void => {
    evt.preventDefault()
    searchWord(word)
  }
  //
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Dictionary />
        <div className={styles.fontToggleContainer}>
          <div className={styles.fontArrow}>
            <Font /> <Arrow size={17}/>
          </div>
          <DividerVertical />
          <div className={styles.toggleMoon}>
            <Toggle />
            {isDark ? <Moon /> : <Sun />}
          </div>
        </div>
      </div>
      <form className={styles.searchContainer} onSubmit={(evt) => { handleSubmit(evt, searchInput) }}>
        <input type="text" placeholder="keyword" onChange={handleChange}/>
        <button>
          <Search size={20} />
        </button>
      </form>
    </header>
  )
}

export default Header
