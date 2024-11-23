import React, { Dispatch, SetStateAction } from 'react';
import styles from './start-page.module.scss';

interface StartPageProps {
  setIsRunning: Dispatch<SetStateAction<boolean>>;
}

export const StartPage = (props: StartPageProps) => {
  const { setIsRunning } = props;
  return (
    <div className={styles.StartPage}>
      <div className={styles.Box}>
        <button onClick={() => setIsRunning(true)} className={styles.Button}>
          Start
        </button>
      </div>
    </div>
  );
};
