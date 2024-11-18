import React, { useState } from 'react';
import styles from './highscore.module.scss';
import { usePlayers } from '../../hooks/usePlayers';
import { GameProgress } from '../game/game';

interface HighscoreProps {
  isRunning: boolean;
}

export const Highscore = (props: HighscoreProps) => {
  const { isRunning } = props;
  const [errorMessage, showError] = useState<string | undefined>();
  const [players] = usePlayers(showError, isRunning);
  return (
    <div className={styles.HighscoreWrapper}>
      <div className={styles.TitleWrapper}>
        <div className={styles.Cup}>
          <img src='../cup.png' className={styles.CupImage} />
        </div>
        <div className={styles.Title}>Highscore</div>
      </div>

      {players ? (
        players.slice(0, 10).map((player, index) => (
          <div className={styles.Player}>
            <div className={styles.Rank}>{index + 1}</div>
            <div className={styles.Name}>{player.name}</div>
            <div className={styles.Score}>{player.highscore}</div>
          </div>
        ))
      ) : (
        <span>Highscore konnte nicht geladen werden</span>
      )}
    </div>
  );
};
