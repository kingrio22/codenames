import React, { PropsWithChildren } from 'react';
import styles from './game-result.module.scss';

export const GameResult = (props: PropsWithChildren) => {
  return (
    <div className={styles.GameResult}>
      <div className={styles.Modal}>
        <h2>Game Over</h2>
        <h4>Dein spiel ist zu ende!</h4>
        <p>Dein Spielstand: </p>

        <p>du bisch 1 loser</p>
        {props.children}
      </div>
    </div>
  );
};
