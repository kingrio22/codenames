import React, { useEffect, useState } from 'react';
import styles from './highscore.module.scss';
import { Player } from '../../api/create-player';
import { usePlayers } from '../../hooks/usePlayers';
import { GameProgress } from '../game/game';

interface HighscoreProps {
  game: GameProgress | undefined;
  isRunning: boolean;
}

export const Highscore = (props: HighscoreProps) => {
  const { game, isRunning } = props;
  const [errorMessage, showError] = useState<string | undefined>();
  const [players] = usePlayers(showError, game, isRunning);
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
