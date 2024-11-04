import React, { useEffect, useState } from 'react';
import styles from './highscore.module.scss';
import { Player } from '../../api/create-player';
import { usePlayers } from '../../hooks/usePlayers';

interface HighscoreProps {}

export const Highscore = (props: HighscoreProps) => {
  const [errorMessage, showError] = useState<string | undefined>();
  const [players] = usePlayers(showError);
  return (
    <div className={styles.HighscoreWrapper}>
      {players.map((player, index) => (
        <div className={styles.Player}>
          <div className={styles.Rank}>{index + 1}.</div>
          <div className={styles.Name}>{player.name}</div>
          <div className={styles.Score}>{player.highscore}</div>
          <div className={styles.LevelsPlayed}>
            {player.levelsPlayed.length}
          </div>
        </div>
      ))}
    </div>
  );
};
