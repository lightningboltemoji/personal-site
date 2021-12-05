import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import SnapScrollContainer from './components/snap-scroll-container';
import SnapScrollPane from './components/snap-scroll-pane';

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>cecchetti.xyz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SnapScrollContainer>
          <SnapScrollPane className={styles.flexWrapper}>
            <video
              className={styles.video}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            >
              <source src="memoji.mp4" type="video/mp4" />
              There should be a memoji here, but it looks like your browser
              doesn&apos;t support it!
            </video>
            <h1 className={styles.title}>Tanner Cecchetti</h1>
            <p className={styles.subtitle}>Software engineer 👨‍💻</p>
            <p className={styles.subtitle}>Portland, OR 🌲</p>
            <div className={styles.linkRow}>
              <a
                target="_"
                href="https://www.linkedin.com/in/tanner-cecchetti/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a target="_" href="https://github.com/lightningboltemoji">
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
            </div>
          </SnapScrollPane>
          <SnapScrollPane className={styles.flexWrapper}>
            <h1 className={styles.title}>Hello, there!</h1>
            <p className={styles.subtitle}>
              Let&apos;s talk a little bit about what I do.
            </p>
            <p className={styles.pAlignCenter}>
              I&apos;m <strong>most comfortable</strong> designing cloud
              architecture in <strong>AWS and GCP</strong>, building backend{' '}
              <strong>services in Java</strong>, and{' '}
              <strong>CI/CD pipelines in Python</strong>.
            </p>
            <p className={styles.pAlignCenter}>
              I&apos;m most interested in <strong>learning more</strong> about{' '}
              <strong>Go, Rust, TypeScript, and Kubernetes</strong>.
            </p>
          </SnapScrollPane>
        </SnapScrollContainer>
      </main>
    </div>
  );
};

export default Index;
