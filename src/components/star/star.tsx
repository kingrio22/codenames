import React from 'react';
import styles from './star.module.scss';

interface StarProps {
  filled: boolean;
}

export const Star = (props: StarProps) => {
  const { filled } = props;
  if (filled) {
    return (
      <div className={styles.StarWrapper}>
        <div className={styles.Star} />
        <div className={styles.ScaledStar} />
      </div>
    );
  }
  return (
    <div className={styles.StarWrapper}>
      <div className={styles.Star} />
    </div>
  );
};
