import React from 'react';
import styles from './result.module.scss';
import { usePlayers } from '../../hooks/usePlayers';

interface ResultProps {
  highscore: number;
  playerId: number;
  type: 'POKEMON' | 'CODENAMES';
}

export const Result = (props: ResultProps) => {
  const { highscore, playerId, type } = props;
  const [players] = usePlayers(() => null, type);
  const rank = (players.findIndex((p) => p.id === playerId) ?? 0) + 1;
  return (
    <div className={styles.ResultWrapper}>
      <div className={styles.Result}>
        <div className={styles.Title}>Game Over</div>
        <div className={styles.ColumnRow}>
          <div className={styles.Column}>Your Score: {highscore}</div>
          <div className={styles.Column}>Your Rank: {rank}</div>
        </div>
      </div>
    </div>
  );
};
