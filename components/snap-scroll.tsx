import classNames from 'classnames';
import styles from './snap-scroll.module.css';

type Props = {
  className?: string;
  children: any;
};

function Base(clz: string) {
  return function Base(p: Props) {
    return <div className={classNames(clz, p.className)}>{p.children}</div>;
  };
}

const Container = Base(styles.container);
const Pane = Base(styles.pane);

export { Container as SnapScrollContainer, Pane as SnapScrollPane };
