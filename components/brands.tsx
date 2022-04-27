import classnames from 'classnames';
import styles from './brands.module.css';

type BrandRowProps = {
  children: any;
};

export const BrandRow = (p: BrandRowProps) => (
  <div className={styles.row}>{p.children}</div>
);

type ContainerProps = {
  style?: any;
  padded?: boolean;
  children: any;
};

const Container = (p: ContainerProps) => (
  <div
    style={p.style}
    className={classnames(styles.container, {
      [styles.containerPadding]: p.padded !== false,
    })}
  >
    {p.children}
  </div>
);

export const Java = () => (
  <Container style={{ backgroundColor: '#f9e7e7' }}>
    <img src="./logo/java.svg" />
  </Container>
);

export const Python = () => (
  <Container style={{ backgroundColor: '#aac0af' }}>
    <img src="./logo/python.svg" />
  </Container>
);

export const AWS = () => (
  <Container style={{ backgroundColor: '#232f3e' }}>
    <img src="./logo/aws.svg" />
  </Container>
);

export const GCP = () => (
  <Container style={{ backgroundColor: '#9bc1bc' }}>
    <img src="./logo/gcp.svg" />
  </Container>
);

export const Go = () => (
  <Container style={{ backgroundColor: '#4eabd5' }}>
    <img src="./logo/golang.svg" />
  </Container>
);

export const Rust = () => (
  <Container style={{ backgroundColor: '#e65212' }}>
    <img src="./logo/rust.svg" />
  </Container>
);

export const Kubernetes = () => (
  <Container style={{ backgroundColor: '#416bdd' }}>
    <img src="./logo/kubernetes.svg" />
  </Container>
);

export const JavaScript = () => (
  <Container padded={false}>
    <img src="./logo/javascript.svg" />
  </Container>
);

export const TypeScript = () => (
  <Container padded={false}>
    <img src="./logo/typescript.svg" />
  </Container>
);

export const Docker = () => (
  <Container padded={false} style={{ backgroundColor: '#f39237' }}>
    <img src="./logo/docker.svg" />
  </Container>
);
