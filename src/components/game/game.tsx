import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './game.module.scss';
import { Board } from '../board/board';
import { Level } from '../levels/levels.const';
import { GameResult } from '../game-result/game-result';
import { shuffle } from '../../utils/functions/array-shuffle';
import { Highscore } from '../highscore/highscore';
import { Player } from '../../api/create-player';
import { updatePlayer } from '../../api/update-player';
import { getLevel } from '../../api/get-random-level.api';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';
import { CountdownApi } from 'react-countdown';
import { Result } from '../result/resutl';

export type GameMode = 'INTERHYP' | 'CHATGPT';
export type Complexity = 'LOW' | 'MIDDLE' | 'HARD';
export interface GameProgress {
  mode: GameMode;
  complexity: Complexity;
  highscore: number;
  levelsPlayed: number[];
  startedAt: number;
}
interface GameProps {
  isRunning: boolean;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
}
export const Game = (props: GameProps) => {
  const { isRunning, setIsRunning } = props;
  const [game, setGame] = useState<GameProgress | undefined>();

  const [loading, setLoading] = useState<boolean>(false);

  const [player, setPlayer] = useState<Player | undefined>();

  const [showResult, setShowResult] = useState<boolean>(false);

  const [level, setLevel] = useState<Level | undefined>();

  const [countdownRef, setCountdownRef] = useState<CountdownApi | null>(null);

  const setPause = () => {
    countdownRef && countdownRef.pause();
  };
  const setStart = () => {
    countdownRef && countdownRef.start();
  };

  const nextLevel = async (solved: number) => {
    if (!game || !player || !level) {
      return;
    }

    setLevel((prev) => {
      if (prev) {
        return { ...prev, cards: prev.cards.map((c) => ({ ...c, word: '' })) };
      }
    });

    setPause();
    const newLevel = await getLevel(
      game.mode,
      player.id,
      [...game.levelsPlayed, level.id],
      setLoading
    );

    setGame((game) => {
      if (game && level) {
        return {
          ...game,
          levelsPlayed: [...game.levelsPlayed, level.id],
          highscore: game.highscore + solved,
        };
      }
      return game;
    });
    setLevel(undefined);

    if (newLevel) {
      const shuffledCards = shuffle(newLevel.cards);
      setLevel({ ...newLevel, cards: shuffledCards });
      setStart();
    } else {
      setIsRunning(false);
    }
  };

  const finishGame = async () => {
    if (!player || !game) {
      return;
    }
    const updatePromise = updatePlayer(game, player);
    setPlayer(undefined);
    setLevel(undefined);
    // upcoming
    setShowResult(true);
    //upcoming end
    setTimeout(async () => {
      setGame(undefined);
      await updatePromise;
      setIsRunning(false);
      // upcoming
      setShowResult(false);
      //upcoming end
    }, 5000);
  };

  const [countdown] = useState<number>(120000);

  return (
    <div className={styles.GameWrapper}>
      <div className={styles.TopBar}>
        <div className={styles.Title}>C0D3N4M35</div>
      </div>
      <div className={styles.Content}>
        {loading && <LoadingSpinner />}
        <div className={styles.BoardWrapper}>
          {level && isRunning && game && player && (
            <Board
              hint={level.hint}
              cards={level.cards}
              correctWordsCount={level.correctWords}
              nextLevel={nextLevel}
              currentScore={game?.highscore}
              complexity={game?.complexity}
              finishGame={finishGame}
              game={game}
              isRunning={isRunning}
              player={player}
              setCountdownRef={setCountdownRef}
            />
          )}

          {showResult && (
            <Result
              highscore={game?.highscore ?? 0}
              levelsPlayed={game?.levelsPlayed.length ?? 0}
            />
          )}

          {isRunning === false && (
            <GameResult
              game={game}
              setGame={setGame}
              setIsRunning={setIsRunning}
              setLevel={setLevel}
              countdown={countdown}
              setPlayer={setPlayer}
              player={player}
              setLoading={setLoading}
            />
          )}
        </div>
        <div className={styles.SideBar}>
          <Highscore isRunning={isRunning} />
        </div>
      </div>
    </div>
  );
};
