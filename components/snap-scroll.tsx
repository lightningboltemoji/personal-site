import classNames from 'classnames';
import styles from './snap-scroll.module.css';

type Props = {
  className?: string;
  children: any;
};

const Base = (clz: string) => (p: Props) => {
  return <div className={classNames(clz, p.className)}>{p.children}</div>;
};
const Container = Base(styles.container);
const Pane = Base(styles.pane);

export { Container as SnapScrollContainer, Pane as SnapScrollPane };
