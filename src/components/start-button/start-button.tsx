import React from "react";
import styles from "./start-button.module.scss";
import { Dispatch, SetStateAction } from "react";
import { Complexity, GameProgress } from "../game/game";
import { Level } from "../levels/levels.const";
import { Player } from "../../api/create-player";
import { getLevel } from "../../api/get-random-level.api";

interface StartButtonProps {
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setGame: Dispatch<SetStateAction<GameProgress | undefined>>;
  setLevel: Dispatch<SetStateAction<Level | undefined>>;
  complexity: Complexity | undefined;
  countdown: number;
  player: Player | undefined;
}
export const StartButton = (props: StartButtonProps) => {
  const {
    setIsRunning,
    setGame,
    countdown,
    setLevel,
    complexity,
    player,
    setLoading,
  } = props;

  return (
    <button
      onClick={async () => {
        if (!player || !complexity) {
          return;
        }
        setIsRunning(true);
        fetchInitialLevel(
          () => getLevel(player.id, [], setLoading),
          (level) => setLevel(level)
        );
        setGame({
          highscore: 0,
          levelsPlayed: [],
          startedAt: Date.now() + countdown,
          complexity,
          highscorePokemon: 0,
        });
      }}
      className={styles.NewGameButton}
    >
      Start Game
    </button>
  );
};
async function fetchInitialLevel(
  getLevel: () => Promise<Level>,
  setLevel: (level: Level) => void
) {
  const level = await getLevel();
  if (level) {
    setLevel(level);
  } else {
    alert("No level available");
  }
}
