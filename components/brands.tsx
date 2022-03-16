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
  <Container>
    <img src="./logo/java.svg" />
  </Container>
);

export const Python = () => (
  <Container>
    <img src="./logo/python.svg" />
  </Container>
);

export const AWS = () => (
  <Container style={{ backgroundColor: '#232f3e' }}>
    <img src="./logo/aws.svg" />
  </Container>
);

export const GCP = () => (
  <Container>
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
