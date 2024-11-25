import React, { Dispatch, SetStateAction } from 'react';
import styles from './statistics.module.scss';
import { GameProgress } from '../game/game';
import { CountDownTimer } from '../countdown/countdown';
import { CountdownApi } from 'react-countdown';

interface StatisticsProps {
  playerName: string;
  levelsPlayedCount: number;
  currentScore: number;
  game: GameProgress;
  finishGame: () => void;
  isRunning: boolean;
  setCountdownRef: Dispatch<SetStateAction<CountdownApi | null>>;
}

export const StatisticsColumn = (props: StatisticsProps) => {
  const {
    game,
    playerName,
    levelsPlayedCount,
    currentScore,
    finishGame,
    isRunning,
    setCountdownRef,
  } = props;
  return (
    <div className={styles.StatisticColumn}>
      <div className={styles.Header}>
        <img src='../stewart.png' alt='' />
      </div>
      <div className={styles.PlayerName}>{playerName}</div>
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
            <div className={styles.ColumnValue}>{levelsPlayedCount}</div>
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
