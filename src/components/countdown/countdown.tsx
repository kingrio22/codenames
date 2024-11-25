import Countdown, { CountdownRenderProps, CountdownApi } from 'react-countdown';
import { GameProgress } from '../game/game';
import styles from './countdown.module.scss';
import React, { Dispatch, SetStateAction } from 'react';
interface CProps {
  isRunning: boolean;
  game: GameProgress;
  finishGame: () => void;
  setCountdownRef: Dispatch<SetStateAction<CountdownApi | null>>;
}
export const CountDownTimer = (props: CProps) => {
  const { isRunning, game, finishGame, setCountdownRef } = props;

  const fillup = (value: string) => {
    if (value.length === 1) {
      return `0${value}`;
    }
    return value;
  };
  const renderer = ({ minutes, seconds }: CountdownRenderProps) => {
    return (
      <span>
        {fillup(minutes.toString())}:
        {getSeconds(minutes === 0, seconds.toString())}
      </span>
    );
  };

  const getSeconds = (isLastMinute: boolean, seconds: string) => {
    if (isLastMinute && seconds.length < 2) {
      return <span className={styles.LastSeconds}>{fillup(seconds)}</span>;
    }
    if (seconds.length < 2) {
      return fillup(seconds);
    }
    return seconds;
  };

  return (
    <div className={styles.Countdown}>
      {isRunning && (
        <Countdown
          ref={(countdown) => setCountdownRef(countdown)}
          renderer={renderer}
          date={game?.startedAt}
          onComplete={finishGame}
        />
      )}
    </div>
  );
};
