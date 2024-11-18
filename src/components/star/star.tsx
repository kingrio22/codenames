import React from 'react';
import styles from './star.module.scss';

interface StarProps {
  filled: boolean;
  color: string;
}

export const Star = (props: StarProps) => {
  const { filled, color } = props;
  if (filled) {
    return (
      <div className={styles.StarWrapper}>
        <div className={styles.Star} style={{ background: color }} />
        <div className={styles.ScaledStar} />
      </div>
    );
  }
  return (
    <div className={styles.StarWrapper}>
      <div className={styles.Star} style={{ background: color }} />
    </div>
  );
};
