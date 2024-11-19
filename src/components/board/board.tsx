import React, { useEffect, useState } from "react";
import { CardComponent } from "../card/card";
import styles from "./board.module.scss";
import { Complexity, GameProgress } from "../game/game";
import { Card, Level } from "../levels/levels.const";
import { CountDownTimer } from "../countdown/countdown";
import { Player } from "../../api/create-player";

interface BoardProps {
  cards: Level["cards"];
  hint: string;
  nextLevel: (solved: number) => void;
  correctWordsCount: number;
  currentScore: number | undefined;
  complexity: Complexity | undefined;
  finishGame: () => void;
  game: GameProgress;
  isRunning: boolean;
  player: Player;
}

const KEEP_CARDS_VISIBLE = 1000;

export const Board = (props: BoardProps) => {
  const {
    nextLevel,
    complexity = "LOW",
    cards,
    hint,
    correctWordsCount,
    currentScore = 0,
    finishGame,
    isRunning,
    game,
    player,
  } = props;
  const [chosens, setChosens] = useState<Card[]>([]);

  const [levelFinished, setLevelFinished] = useState<boolean>(false);

  useEffect(() => {
    if (chosens.length === 0) {
      return;
    }
    if (
      complexity === "HARD" &&
      chosens.some((card) => card.isCorrect === false)
    ) {
      setLevelFinished(true);
      setTimeout(() => {
        setChosens([]);
        nextLevel(0);
      }, KEEP_CARDS_VISIBLE);
      setTimeout(() => {
        setLevelFinished(false);
      }, KEEP_CARDS_VISIBLE + 600);
    } else if (chosens.length === correctWordsCount) {
      setLevelFinished(true);
      setTimeout(() => {
        const points = getPointsByComplexity(chosens, complexity);
        nextLevel(points);
        setChosens([]);
      }, KEEP_CARDS_VISIBLE);
      setTimeout(() => {
        setLevelFinished(false);
      }, KEEP_CARDS_VISIBLE + 600);
    }
  }, [chosens, nextLevel, complexity, correctWordsCount]);

  return (
    <div className={styles.GameWrapper}>
      <div className={styles.StatisticColumn}>
        <div className={styles.Header}>
          <img src="../stewart.png" alt="" />
        </div>
        <div className={styles.PlayerName}>{player.name}</div>
        <div className={styles.ColumnRow}>
          <div className={styles.Column}>
            <div className={styles.Icon}>
              <img src="../score.svg" alt="score" />
            </div>
            <div className={styles.Content}>
              <div className={styles.ColumnTitle}>Score</div>
              <div className={styles.ColumnValue}>{currentScore}</div>
            </div>
          </div>
          <div className={styles.Column}>
            <div className={styles.Icon}>
              <img src="../level.svg" alt="level" />
            </div>
            <div className={styles.Content}>
              <div className={styles.ColumnTitle}>Level</div>
              <div className={styles.ColumnValue}>
                {player.levelsPlayed.length}
              </div>
            </div>
          </div>
          <div className={styles.Column}>
            <div className={styles.Icon}>
              <img src="../timer.svg" alt="timer" />
            </div>
            <div className={styles.Content}>
              <div className={styles.ColumnTitle}>Time</div>
              <div className={styles.ColumnValue}>
                <CountDownTimer
                  finishGame={finishGame}
                  isRunning={isRunning}
                  game={game}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.BoardWrapper}>
        <div className={styles.HintRow}>
          {hint}
          <div className={styles.correctWords}>{correctWordsCount}</div>
        </div>

        <div className={styles.Board}>
          {cards.map((card) => (
            <CardComponent
              card={card}
              setChosens={setChosens}
              isChosen={!!chosens.find((c) => c.id === card.id)}
              hideCardColor={chosens.length === 0}
              levelFinished={levelFinished}
            />
          ))}
        </div>
      </div>
      <div className={styles.FakeColumn}>
        <div className={styles.Row}>
          <div className={styles.Column}></div>
          <div className={styles.Column}></div>
          <div className={styles.Column}></div>
        </div>
      </div>
    </div>
  );
};
function getPointsByComplexity(
  chosens: Card[],
  complexity: Complexity
): number {
  const correct = chosens.filter((card) => card.isCorrect === true).length;
  const notCorrect = chosens.filter((card) => card.isCorrect === false).length;

  switch (complexity) {
    case "LOW":
      return correct;

    case "MIDDLE":
      return correct < notCorrect ? 0 : (correct - notCorrect) * 2;

    case "HARD":
      return correct * 5;
  }
}
