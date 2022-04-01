import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>jeschkeova.cz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <b>jeschkeova.cz</b>
        </h1>
        <p style={{textAlign: "center"}}>
          <a href="mailto:zuz@zuzjes.com">zuz@zuzjes.com</a><br/>
          <a href="https://zuzjes.com/">zuzjes.com</a>
        </p>
      </main>
    </div>
  )
}
