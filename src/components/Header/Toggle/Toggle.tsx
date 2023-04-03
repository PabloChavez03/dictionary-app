import styles from './Toggle.module.css'
import { useThemeProvider } from '../../../contexts/ThemeContext'

const Toggle = (): JSX.Element => {
  const { isDark, changeTheme } = useThemeProvider()
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    changeTheme(evt.target.checked)
  }
  return (
    <div className={styles.wrapToggle}>
      <input type="checkbox" id="toggle" className={styles.offscreen} onChange={handleChange} checked={isDark}/>
      <label htmlFor="toggle" className={styles.switch}></label>
    </div>
  )
}

export default Toggle
