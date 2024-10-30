import React, { PropsWithChildren } from 'react';
import styles from './game-result.module.scss';
import { GameProgress } from '../game/game';

interface GameResultProps extends PropsWithChildren {
  game: GameProgress | undefined;
}

export const GameResult = (props: GameResultProps) => {
  const { children, game } = props;
  return (
    <div className={styles.GameResult}>
      <div className={styles.Modal}>
        <h2>Game Over</h2>
        <h4>Dein spiel ist zu ende!</h4>
        <p>Dein Spielstand: {game?.highscore}</p>

        <p>du bisch 1 loser</p>
        {children}
      </div>
    </div>
  );
};
