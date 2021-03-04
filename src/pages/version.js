
import pkg from '../../package.json'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
function Version() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Machine Host Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Version <strong className={styles.bold}>{pkg.version}</strong></h1>
      </main>
    </div>
  )
}

export default Version
