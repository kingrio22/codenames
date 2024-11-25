import React, { Dispatch, SetStateAction } from 'react';
import styles from './start-page.module.scss';

interface StartPageProps {
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  setStartedAt: Dispatch<SetStateAction<number>>;
}

export const StartPage = (props: StartPageProps) => {
  const { setIsRunning, setStartedAt } = props;
  return (
    <div className={styles.StartPage}>
      <div className={styles.TopBar}>
        <div className={styles.Title}>Framework or Pokemon</div>
      </div>
      <div className={styles.Box}>
        <button
          onClick={() => {
            setIsRunning(true);
            setStartedAt(Date.now());
          }}
          className={styles.NewGameButton}
        >
          Start
        </button>
      </div>
    </div>
  );
};
