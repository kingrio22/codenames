import React from 'react';
import styles from './result.module.scss';

interface ResultProps {
  highscore: number;
  levelsPlayed: number;
}

export const Result = (props: ResultProps) => {
  const { highscore, levelsPlayed } = props;
  return (
    <div className={styles.ResultWrapper}>
      <div className={styles.Result}>
        <div className={styles.Title}>Game Over</div>
        <div className={styles.ColumnRow}>
          <div className={styles.Column}>Your Score: {highscore}</div>
          <div className={styles.Column}>Level reached: {levelsPlayed}</div>
        </div>
      </div>
    </div>
  );
};
