import React from "react";
import styles from "./result.module.scss";
import { usePlayers } from "../../hooks/usePlayers";

interface ResultProps {
  highscore: number;
  playerId: number;
  type: "POKEMON" | "CODENAMES";
  onHideResult: () => void;
}

export const Result = (props: ResultProps) => {
  const { highscore, playerId, type, onHideResult } = props;
  const [players] = usePlayers(type);
  const rank = (players.findIndex((p) => p.id === playerId) ?? 0) + 1;
  return (
    <div className={styles.ResultWrapper}>
      <div className={styles.Result}>
        <div className={styles.Title}>Game Over</div>
        <div className={styles.ColumnRow}>
          <div className={styles.Column}>
            <div className={styles.ColumnTitle}>Your Score:</div>
            <div className={styles.ColumnValue}>{highscore}</div>
          </div>
          <div className={styles.Column}>
            <div className={styles.ColumnTitle}>Your Rank:</div>
            <div className={styles.ColumnValue}>{rank}</div>
          </div>
        </div>
        <div className={styles.ButtonWrapper}>
          <button className={styles.FinishButton} onClick={onHideResult}>
            Finish
          </button>
        </div>
      </div>
    </div>
  );
};
