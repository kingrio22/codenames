import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./game.module.scss";
import { Board } from "../board/board";
import { Level } from "../levels/levels.const";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { Timer } from "../timer/timer";
import { GameResult } from "../game-result/game-result";
import { shuffle } from "../../utils/functions/array-shuffle";
import { CreateLevel } from "../levels/create-level";
import { NewPlayer } from "../player/create-player";
import { Highscore } from "../highscore/highscore";
import { Player } from "../../api/create-player";
import { updatePlayer } from "../../api/update-player";
import { getLevel } from "../../api/get-random-level.api";

export type GameMode = "INTERHYP" | "CHATGPT";
export type Complexity = "LOW" | "MIDDLE" | "HARD";
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
  const [showNewPlayer, setShowNewPlayer] = useState<boolean>(false);

  const [player, setPlayer] = useState<Player | undefined>();

  const [level, setLevel] = useState<Level | undefined>();

  const nextLevel = async (solved: boolean) => {
    if (!game || !player) {
      return;
    }

    const newLevel = await getLevel(game?.mode, game?.complexity, player?.id);

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
            highscore: game.highscore - 1,
          };
        }
      }
      return game;
    });
    setLevel(undefined);

    if (newLevel) {
      setLevel(newLevel);
    } else {
      setIsRunning(false);
    }
  };

  const finishGame = async () => {
    if (!player || !game) {
      return;
    }
    const updatePromise = updatePlayer(game, player);
    setIsRunning(false);
    await updatePromise;
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

  console.log("is running: ", isRunning);

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
              cards={shuffle(level?.cards)}
              correctWordsCount={level.correctWords}
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
              setShowNewPlayer={setShowNewPlayer}
              setPlayer={setPlayer}
              player={player}
            />
          )}
        </div>
        <div className={styles.SideBar}>
          <Highscore game={game} isRunning={isRunning} />

          <div className={styles.Countdown}>
            {isRunning && (
              <Countdown
                renderer={renderer}
                date={game?.startedAt}
                onComplete={finishGame}
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
      {showNewPlayer && (
        <div className={styles.CreateWrapper}>
          <div className={styles.CreateModal}>
            <NewPlayer setShowNewPlayer={setShowNewPlayer} />
          </div>
        </div>
      )}
    </div>
  );
};
