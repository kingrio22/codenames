import React from 'react';
import styles from './loading-spinner.module.scss';

export const LoadingSpinner = () => {
  return (
    <div className={styles.LoadingWrapper}>
      <span className={styles.Loading}></span>
    </div>
  );
};
