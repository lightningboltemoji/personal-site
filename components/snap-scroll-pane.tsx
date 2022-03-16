import styles from './snap-scroll-pane.module.css';

type Props = {
  className?: string;
  children: any;
};

const SnapScrollPane = (p: Props) => {
  return (
    <div
      className={`${styles.container}${
        (p.className && ` ${p.className}`) || ''
      }`}
    >
      {p.children}
    </div>
  );
};

export default SnapScrollPane;
