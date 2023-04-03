import styles from './NotFound.module.css'

const Error404 = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <h1>The word you are looking for does not exist :(</h1>
    </main>
  )
}

export default Error404
