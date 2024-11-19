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
  showCreate: boolean | undefined;
  setShowCreateModal: Dispatch<SetStateAction<boolean | undefined>>;
}
export const Game = (props: GameProps) => {
  const { setShowCreateModal, showCreate } = props;
  const [game, setGame] = useState<GameProgress | undefined>();

  const [loading, setLoading] = useState<boolean>(false);

  const [player, setPlayer] = useState<Player | undefined>();

  const [level, setLevel] = useState<Level | undefined>();

  const nextLevel = async (solved: number) => {
    if (!game || !player || !level) {
      return;
    }

    const newLevel = await getLevel(
      game.mode,
      game.complexity,
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
    setGame(undefined);
    await updatePromise;
    setIsRunning(false);
  };

  const [countdown, setCountdown] = useState<number>(60000000);

  const [isRunning, setIsRunning] = useState<boolean>(false);

  return (
    <div className={styles.GameWrapper}>
      <div className={styles.TopBar}>
        <div className={styles.Title}>C0D3N4M35</div>
      </div>
      <div className={styles.Content}>
        {loading && <LoadingSpinner />}
        <div className={styles.BoardWrapper}>
          {level && isRunning && game && (
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
