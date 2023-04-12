import styles from './Play.module.css'

const Play = (): JSX.Element => {
  const className = `icon icon-tabler icon-tabler-player-play-filled ${styles.playSvg}`
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path
        d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
        strokeWidth="0"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export default Play
