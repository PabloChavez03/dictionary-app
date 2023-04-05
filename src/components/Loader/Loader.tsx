import styles from './Loader.module.css'

const Loader = (): JSX.Element => {
  return (
    <div className={styles.loader}>
      <h1>Loading...</h1>
    </div>
  )
}

export default Loader
