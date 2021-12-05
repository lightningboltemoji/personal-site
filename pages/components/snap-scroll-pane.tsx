import styles from './snap-scroll-pane.module.css';

type Props = {
  className?: string;
  children: any;
};

const SnapScrollPane = ({ className, children }: Props) => {
  return (
    <div
      className={`${styles.container}${(className && ` ${className}`) || ''}`}
    >
      {children}
    </div>
  );
};

export default SnapScrollPane;
