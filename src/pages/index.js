import Head from 'next/head'
import styles from '../styles/Home.module.css'
import os from 'os'
function Home(props) {
  const hostname = props.data.hostName
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Hi there! I'm being served from {hostname}</h1>
      </main>
    </div>
  )
}
Home.getInitialProps = async (ctx) => {
  const data = {
    hostName: os.hostname() || "localhost"
  }
 return {
  data
 }
}
export default Home
