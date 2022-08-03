import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Auth Server</title>
        <meta name="description" content="Auth Server" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This one's just a server. Open Postman and have fun
        </h1>
      </main>
    </div>
  )
}
