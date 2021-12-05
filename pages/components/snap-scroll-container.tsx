import styles from './snap-scroll-container.module.css';

type Props = {
  className?: string;
  children: any;
};

const SnapScrollContainer = ({ className, children }: Props) => {
  return (
    <div
      className={`${styles.container}${(className && ` ${className}`) || ''}`}
    >
      {children}
    </div>
  );
};

export default SnapScrollContainer;
