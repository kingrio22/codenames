import React from 'react';
import styles from './start-button.module.scss';
import { Dispatch, SetStateAction } from 'react';
import { Complexity, GameMode, GameProgress } from '../game/game';
import { LEVELS, Level } from '../levels/levels.const';
import { Player } from '../../api/create-player';

interface StartButtonProps {
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  setGame: Dispatch<SetStateAction<GameProgress | undefined>>;
  setLevel: Dispatch<SetStateAction<Level | undefined>>;
  mode: GameMode;
  complexity: Complexity;
  countdown: number;
  player: Player | undefined;
}
export const StartButton = (props: StartButtonProps) => {
  const {
    setIsRunning,
    setGame,
    countdown,
    setLevel,
    mode,
    complexity,
    player,
  } = props;

  return (
    <button
      disabled={!!player}
      onClick={() => {
        setIsRunning(true);
        setLevel(LEVELS[0]);
        setGame({
          solved: 0,
          failed: 0,
          highscore: 0,
          levelsPlayed: player?.levelsPlayed ?? [],
          startedAt: Date.now() + countdown,
          complexity,
          mode,
        });
      }}
      className={styles.NewGameButton}
    >
      Start
    </button>
  );
};
