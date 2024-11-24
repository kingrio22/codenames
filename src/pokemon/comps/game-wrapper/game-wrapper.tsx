import React, { useState } from "react";
import styles from "./game-wrapper.module.scss";
import { Board } from "../board/board";
import { StartPage } from "../start-page/start-page";

export const GameWrapper = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);

  return (
    <div className={styles.GameWrapper}>
      {isRunning ? (
        <Board setIsRunning={setIsRunning} startedAt={Date.now()} />
      ) : (
        <StartPage setIsRunning={setIsRunning} />
      )}
    </div>
  );
};
