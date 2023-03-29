import { useState } from 'react'
import styles from './Header.module.css'
import Dictionary from '../../assets/icons/Dictionary'
import DividerVertical from '../../assets/icons/DividerVertical'
import Arrow from '../../assets/icons/Arrow'
import Moon from '../../assets/icons/Moon'
import Search from '../../assets/icons/Search'

const Header = (): JSX.Element => {
  const [font, setFont] = useState({
    serif: 'serif',
    sansSerif: 'sans-serif',
    monospace: 'monospace'
  })
  //
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Dictionary />
        <div className={styles.fontToggleContainer}>
          <div className={styles.fontArrow}>
            <strong>font</strong> <Arrow />
          </div>
          <DividerVertical />
          <div className={styles.toggleMoon}>
            <strong>toggle</strong> <Moon />
          </div>
        </div>
      </div>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="keyword" />
        <Search size={20}/>
      </div>
    </header>
  )
}

export default Header
