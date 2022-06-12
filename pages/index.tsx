import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { NextPage } from 'next';
import Head from 'next/head';
import { FunctionComponent } from 'react';
import { Circles } from '~/components/circles';
import {
  AWS,
  Docker,
  GCP,
  Go,
  Java,
  JavaScript,
  Kubernetes,
  LogoRow,
  Python,
  Rust,
  TypeScript,
} from '~/components/logos';
import { SnapScrollContainer, SnapScrollPane } from '~/components/snap-scroll';
import styles from './index.module.css';

const BasicInfo: FunctionComponent = () => (
  <SnapScrollPane className={styles.flexWrapper}>
    <Circles />

    <video
      className={styles.video}
      autoPlay
      loop
      muted
      playsInline
      controls={false}
    >
      <source src="memoji.mp4" type="video/mp4" />
      There should be a memoji here, but it looks like your browser doesn&apos;t
      support it!
    </video>
    <h1 className={styles.title}>Tanner Cecchetti</h1>
    <p className={styles.subtitle}>Software engineer 👨‍💻</p>
    <p className={styles.subtitle}>Portland, OR 🌲</p>
    <div className={styles.linkRow}>
      <a target="_" href="https://www.linkedin.com/in/tanner-cecchetti/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a target="_" href="https://github.com/lightningboltemoji">
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <a target="_" href="mailto:tanner@cecchetti.xyz">
        <FontAwesomeIcon icon={faSquareEnvelope} />
      </a>
    </div>
  </SnapScrollPane>
);

const Skills: FunctionComponent = () => (
  <SnapScrollPane className={styles.flexWrapper}>
    <h1 className={styles.title}>Hello, there!</h1>
    <p className={styles.subtitle}>
      I&apos;m a full-stack engineer with a focus on services, data pipelines,
      and cloud.
    </p>
    <div className={styles.brandContainer}>
      <h2 className={styles.subtitle}>Most familiar with</h2>
      <LogoRow>
        <Python /> <Java /> <AWS /> <GCP /> <Docker />
      </LogoRow>
      <h2 className={styles.subtitle}>Still learning</h2>
      <LogoRow>
        <Go /> <JavaScript /> <TypeScript />
        <Rust /> <Kubernetes />
      </LogoRow>
    </div>
  </SnapScrollPane>
);

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>cecchetti.xyz | Tanner Cecchetti</title>
        {['16x16', '32x32', '96x96'].map((size) => (
          <link
            key={size}
            rel="icon"
            type="image/png"
            href={`/favicon-${size}.png`}
            sizes={size}
          />
        ))}
      </Head>

      <main className={styles.main}>
        <SnapScrollContainer>
          <BasicInfo />
          <Skills />
        </SnapScrollContainer>
      </main>
    </div>
  );
};

export default Index;
