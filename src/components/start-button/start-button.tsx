import React from "react";
import styles from "./start-button.module.scss";
import { Dispatch, SetStateAction } from "react";
import { Complexity, GameMode, GameProgress } from "../game/game";
import { Level } from "../levels/levels.const";
import { Player } from "../../api/create-player";
import { getLevel } from "../../api/get-random-level.api";

interface StartButtonProps {
  setIsRunning: Dispatch<SetStateAction<boolean>>;
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
  } = props;
  const getInitialLevel = async () => {
    if (!player) {
      return;
    }
    return await getLevel(mode, complexity, player.id);
  };
  const buttonDisabled = !player;
  return (
    <button
      disabled={buttonDisabled}
      onClick={async () => {
        setIsRunning(true);
        setLevel(await getInitialLevel());
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
