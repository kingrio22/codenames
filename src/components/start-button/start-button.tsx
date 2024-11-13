import React, { useEffect } from "react";
import styles from "./start-button.module.scss";
import { Dispatch, SetStateAction } from "react";
import { Complexity, GameMode, GameProgress } from "../game/game";
import { Level } from "../levels/levels.const";
import { Player } from "../../api/create-player";
import { getLevel } from "../../api/get-random-level.api";

interface StartButtonProps {
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setGame: Dispatch<SetStateAction<GameProgress | undefined>>;
  setLevel: Dispatch<SetStateAction<Level | undefined>>;
  mode: GameMode;
  complexity: Complexity;
  countdown: number;
  player: Player | undefined;
}
export const StartButton = (props: StartButtonProps) => {
  const {
    setIsRunning,
    setGame,
    countdown,
    setLevel,
    mode,
    complexity,
    player,
    setLoading,
  } = props;

  const buttonDisabled = !player;
  return (
    <button
      disabled={buttonDisabled}
      onClick={async () => {
        if (!player) {
          return;
        }
        setIsRunning(true);
        fetchInitialLevel(
          () => getLevel(mode, complexity, player.id, [], setLoading),
          (level) => setLevel(level)
        );
        setGame({
          solved: 0,
          failed: 0,
          highscore: 0,
          levelsPlayed: player?.levelsPlayed ?? [],
          startedAt: Date.now() + countdown,
          complexity,
          mode,
        });
      }}
      className={styles.NewGameButton}
    >
      Start
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
