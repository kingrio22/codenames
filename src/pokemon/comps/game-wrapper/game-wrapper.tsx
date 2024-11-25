import React, { useState } from 'react';
import styles from './game-wrapper.module.scss';
import { StartPage } from '../start-page/start-page';
import { Game } from '../game/game';
import { Highscore } from '../../../components/highscore/highscore';

export const GameWrapper = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [startedAt, setStartedAt] = useState<number>(0);
  return (
    <div className={styles.GameWrapper}>
      <div className={styles.GameSide}>
        {isRunning ? (
          <Game
            score={score}
            setScore={setScore}
            setIsRunning={setIsRunning}
            startedAt={startedAt}
          />
        ) : (
          <StartPage setIsRunning={setIsRunning} setStartedAt={setStartedAt} />
        )}
      </div>
      <div className={styles.Highscore}>
        <Highscore isRunning={isRunning} gameType={'POKEMON'} />
      </div>
    </div>
  );
};
