import type { NextPage } from 'next'
import Head from 'next/head'
import styles from './index.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>cecchetti.xyz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <video className={styles.video} autoPlay loop muted playsInline controls={false}>
          <source src="memoji.mp4" type="video/mp4" />
          There should be a memoji here, but it looks like your browser doesn&apos;t support it!
        </video>
        <h1 className={styles.title}>
          Tanner Cecchetti
        </h1>
        <p className={styles.subtitle}>
          Software engineer 👨‍💻
        </p>
        <p className={styles.subtitle}>
          Portland, OR 🌲
        </p>
        <div className={styles.linkRow}>
          <a target="_" href="https://www.linkedin.com/in/tanner-cecchetti/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a target="_" href="https://github.com/lightningboltemoji">
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
      </main>
    </div>
  )
}

export default Index
