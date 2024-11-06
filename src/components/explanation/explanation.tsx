import React, { Dispatch, SetStateAction } from 'react';
import styles from './explanation.module.scss';

interface ExplanationProps {
  showExplanation: Dispatch<SetStateAction<boolean>>;
  nextLevel: (result: boolean) => void;
}

export const Explanation = (props: ExplanationProps) => {
  return (
    <div className={styles.ExplanationWrapper}>
      <div className={styles.Explanation}>
        <div className={styles.Correct}></div>
        <div className={styles.Incorrect}></div>
      </div>
      <div className={styles.ButtonWrapper}>
        <button onClick={() => null}></button>
      </div>
    </div>
  );
};
