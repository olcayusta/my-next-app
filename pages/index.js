import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.h1}>Kate Upton</h1>
        <img src="https://i.pinimg.com/564x/3a/a9/80/3aa980e080c2727ee627f8753434dbb2.jpg" alt="" className={styles.img}/>
      </main>
    </div>
  )
}
