import React from 'react';
import styles from './start-button.module.scss';
import { Dispatch, SetStateAction } from 'react';
import { GameProgress } from '../game/game';

interface StartButtonProps {
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  setGame: Dispatch<SetStateAction<GameProgress | undefined>>;
  countdown: number;
}
export const StartButton = (props: StartButtonProps) => {
  const { setIsRunning, setGame, countdown } = props;
  return (
    <button
      onClick={() => {
        setIsRunning(true);
        setGame({
          solved: 0,
          failed: 0,
          highscore: 0,
          levelsPlayed: [],
          startedAt: Date.now() + countdown,
        });
      }}
      className={styles.NewGameButton}
    >
      Start
    </button>
  );
};
