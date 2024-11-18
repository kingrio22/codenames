import Countdown, { CountdownRenderProps } from 'react-countdown';
import { GameProgress } from '../game/game';
import styles from './countdown.module.scss';
import React from 'react';
interface CProps {
  isRunning: boolean;
  game: GameProgress;
  finishGame: () => void;
}
export const CountDownTimer = (props: CProps) => {
  const { isRunning, game, finishGame } = props;
  const renderer = ({ minutes, seconds }: CountdownRenderProps) => {
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  };
  return (
    <div className={styles.Countdown}>
      {isRunning && (
        <Countdown
          renderer={renderer}
          date={game?.startedAt}
          onComplete={finishGame}
        />
      )}
    </div>
  );
};
