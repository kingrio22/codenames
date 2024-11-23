import React, { Dispatch, SetStateAction } from 'react';
import styles from './statistics.module.scss';
import { Player } from '../../api/create-player';
import { GameProgress } from '../game/game';
import { CountDownTimer } from '../countdown/countdown';
import { CountdownApi } from 'react-countdown';

interface StatisticsProps {
  player: Player;
  currentScore: number;
  game: GameProgress;
  finishGame: () => void;
  isRunning: boolean;
  setCountdownRef: Dispatch<SetStateAction<CountdownApi | null>>;
}

export const StatisticsColumn = (props: StatisticsProps) => {
  const { game, player, currentScore, finishGame, isRunning, setCountdownRef } =
    props;
  return (
    <div className={styles.StatisticColumn}>
      <div className={styles.Header}>
        <img src='../stewart.png' alt='' />
      </div>
      <div className={styles.PlayerName}>{player.name}</div>
      <div className={styles.ColumnRow}>
        <div className={styles.Column}>
          <div className={styles.Icon}>
            <img src='../score.svg' alt='score' />
          </div>
          <div className={styles.Content}>
            <div className={styles.ColumnTitle}>Score</div>
            <div className={styles.ColumnValue}>{currentScore}</div>
          </div>
        </div>
        <div className={styles.Column}>
          <div className={styles.Icon}>
            <img src='../level.svg' alt='level' />
          </div>
          <div className={styles.Content}>
            <div className={styles.ColumnTitle}>Level</div>
            <div className={styles.ColumnValue}>
              {player.levelsPlayed.length + game.levelsPlayed.length}
            </div>
          </div>
        </div>
        <div className={styles.Column}>
          <div className={styles.Icon}>
            <img src='../timer.svg' alt='timer' />
          </div>
          <div className={styles.Content}>
            <div className={styles.ColumnTitle}>Time</div>
            <div className={styles.ColumnValue}>
              <CountDownTimer
                finishGame={finishGame}
                isRunning={isRunning}
                game={game}
                setCountdownRef={setCountdownRef}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
