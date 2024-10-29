import React, { useState } from 'react';
import styles from './game.module.scss';
import { Board } from '../board/board';
import { LEVELS } from '../levels/levels.const';
import Countdown from 'react-countdown';

export const Game = () => {
  const [game, setGame] = useState<GameProgress | undefined>();
  const random = Math.floor(Math.random() * 10);
  const level = LEVELS[random];
  const [countdown, setCountdown] = useState<number>(60000);

  return (
    <div className={styles.GameWrapper}>
      <div className={styles.TopBar}>
        <div className={styles.CurrentLevel}></div>

        <div className={styles.CurrentScore}></div>
      </div>
      <div className={styles.Content}>
        <div className={styles.BoardWrapper}>
          <Board level={level} />
        </div>
        <div className={styles.SideBar}>
          <div className={styles.HighscoreWrapper}>
            <ol>
              <li>Saige Fuentes</li>
              <li>Bowen Higgins</li>
              <li>Leighton Kramer</li>
              <li>Kylan Gentry</li>
              <li>Amelie Griffith</li>
              <li>Franklin Sierra</li>
              <li>Marceline Avila</li>
              <li>Jaylen Blackwell</li>
            </ol>
          </div>

          <div className={styles.Countdown}>
            {game && <Countdown date={Date.now() + countdown} />}
          </div>

          <div className={styles.NewGameButtonWrapper}>
            <button
              onClick={() =>
                setGame({
                  solved: 0,
                  failed: 0,
                  highscore: 0,
                  levelsPlayed: [],
                })
              }
              className={styles.NewGameButton}
            >
              Start
            </button>
            <div className={styles.Timer}>
              <div className={styles.CountdownButtons}>
                <button
                  className={styles.TimerButton}
                  onClick={() =>
                    setCountdown((countdown) => (countdown += 5000))
                  }
                >
                  +5
                </button>
                <button
                  className={styles.TimerButton}
                  onClick={() =>
                    setCountdown((countdown) => (countdown -= 5000))
                  }
                >
                  -5
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface GameProgress {
  solved: number;
  failed: number;
  highscore: number;
  levelsPlayed: number[];
}
