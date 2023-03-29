import styles from './DictionaryDivider.module.css'
import DividerHorizontal from '../../assets/icons/DividerHorizontal'

const DictionaryDivider = ({ text }: { text?: string }): JSX.Element => {
  return (
    <div className={styles.dictionaryDivider}>
      {text?.length !== 0 && <strong>{text}</strong>}
      <DividerHorizontal />
      <div />
    </div>
  )
}

export default DictionaryDivider
