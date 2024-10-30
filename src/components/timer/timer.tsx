import React, { Dispatch, SetStateAction } from 'react';
import styles from './timer.module.scss';
interface TimerProps {
  setCountdown: Dispatch<SetStateAction<number>>;
}
export const Timer = (props: TimerProps) => {
  const { setCountdown } = props;
  return (
    <div className={styles.Timer}>
      <div className={styles.CountdownButtons}>
        <button
          className={styles.TimerButton}
          onClick={() => setCountdown((countdown) => (countdown += 5000))}
        >
          +5
        </button>
        <button
          className={styles.TimerButton}
          onClick={() => setCountdown((countdown) => (countdown -= 5000))}
        >
          -5
        </button>
      </div>
    </div>
  );
};
