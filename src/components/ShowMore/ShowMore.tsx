import styles from './ShowMore.module.css'

interface Props {
  hidden: boolean
  changeLimit: (value: number | undefined) => void
  limit: number | undefined
}

const ShowMore = ({ hidden, changeLimit, limit }: Props): JSX.Element => {
  return (
    <button className={styles.button} hidden={hidden} onClick={() => {
      changeLimit(8)
    }}>Show more</button>
  )
}

export default ShowMore
