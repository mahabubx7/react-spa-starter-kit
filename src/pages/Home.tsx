import styles from './page.module.scss'

export function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.greetings}>Home page!</h1>
    </div>
  )
}
