import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './game.module.scss';
import { Board } from '../board/board';
import { LEVELS, Level } from '../levels/levels.const';
import Countdown, { CountdownRenderProps } from 'react-countdown';
import { Timer } from '../timer/timer';
import { StartButton } from '../start-button/start-button';
import { GameResult } from '../game-result/game-result';
import { shuffle } from '../../utils/functions/array-shuffle';
import { CreateLevel } from '../levels/create-level';

export type GameMode = 'INTERHYP' | 'CHATGPT';
export type Complexity = 'LOW' | 'MIDDLE' | 'HARD';
export interface GameProgress {
  solved: number;
  failed: number;
  mode: GameMode;
  complexity: Complexity;
  highscore: number;
  levelsPlayed: number[];
  startedAt: number;
}
interface GameProps {
  showCreate: boolean | undefined;
  setShowCreateModal: Dispatch<SetStateAction<boolean | undefined>>;
}
export const Game = (props: GameProps) => {
  const { setShowCreateModal, showCreate } = props;
  const [game, setGame] = useState<GameProgress | undefined>();

  const [level, setLevel] = useState<Level | undefined>();

  const nextLevel = (solved: boolean) => {
    const nextLevel = LEVELS.filter(
      (next) => !game?.levelsPlayed.includes(next.id) && next.id !== level?.id
    )[0];

    setGame((game) => {
      if (game && level) {
        if (solved) {
          return {
            ...game,
            levelsPlayed: [...game?.levelsPlayed, level.id],
            solved: game.solved + 1,
            highscore: game.highscore + 1,
          };
        } else {
          return {
            ...game,
            levelsPlayed: [...game?.levelsPlayed, level.id],
            failed: game.failed + 1,
            highscore: game.highscore - 2,
          };
        }
      }
      return game;
    });
    setLevel(undefined);

    if (nextLevel) {
      setLevel(nextLevel);
    } else {
      setIsRunning(false);
    }
  };

  const [countdown, setCountdown] = useState<number>(60000);

  const [isRunning, setIsRunning] = useState<boolean>(false);

  const renderer = ({ minutes, seconds }: CountdownRenderProps) => {
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  };

  return (
    <div className={styles.GameWrapper}>
      <div className={styles.TopBar}>
        <div className={styles.BoardPart}>
          <div className={styles.CurrentLevel}>
            Level: {(game?.levelsPlayed.length ?? 0) + 1}
          </div>

          <div className={styles.CurrentScore}>
            Score: {game?.highscore ?? 0}
          </div>
        </div>
        <div className={styles.HighscorePart}>Highscore</div>
      </div>
      <div className={styles.Content}>
        <div className={styles.BoardWrapper}>
          {level && isRunning && (
            <Board
              hint={level.hint}
              cards={shuffle(level.cards)}
              nextLevel={nextLevel}
            />
          )}

          {isRunning === false && (
            <GameResult
              game={game}
              setGame={setGame}
              setIsRunning={setIsRunning}
              setLevel={setLevel}
              countdown={countdown}
              setShowCreate={setShowCreateModal}
            />
          )}
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
            {isRunning && (
              <Countdown
                renderer={renderer}
                date={game?.startedAt}
                onComplete={() => setIsRunning(false)}
              />
            )}
          </div>

          <div className={styles.NewGameButtonWrapper}>
            <Timer setCountdown={setCountdown} />
          </div>
        </div>
      </div>
      {showCreate && (
        <div className={styles.CreateWrapper}>
          <div className={styles.CreateModal}>
            <CreateLevel showCreateLevelModal={setShowCreateModal} />
          </div>
        </div>
      )}
    </div>
  );
};
