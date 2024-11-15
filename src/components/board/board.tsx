import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { CardComponent } from '../card/card';
import styles from './board.module.scss';
import { Card, Level } from '../levels/levels.const';

interface BoardProps {
  cards: Level['cards'];
  hint: string;
  nextLevel: (solved: boolean) => void;
  correctWordsCount: number;
  currentScore: number | undefined;
}

const KEEP_CARDS_VISIBLE = 1000;

export const Board = (props: BoardProps) => {
  const { nextLevel, cards, hint, correctWordsCount, currentScore = 0 } = props;
  const [chosens, setChosens] = useState<Card[]>([]);

  const [levelFinished, setLevelFinished] = useState<boolean>(false);

  useEffect(() => {
    if (chosens.length === 0) {
      return;
    }
    if (chosens.some((card) => card.isCorrect === false)) {
      setLevelFinished(true);
      setTimeout(() => {
        setChosens([]);
        nextLevel(false);
      }, KEEP_CARDS_VISIBLE);
      setTimeout(() => {
        setLevelFinished(false);
      }, KEEP_CARDS_VISIBLE + 600);
    }

    if (chosens.filter((card) => card.isCorrect).length === correctWordsCount) {
      setLevelFinished(true);
      setTimeout(() => {
        setChosens([]);
        nextLevel(true);
      }, KEEP_CARDS_VISIBLE);
      setTimeout(() => {
        setLevelFinished(false);
      }, KEEP_CARDS_VISIBLE + 600);
    }
  }, [chosens, nextLevel, correctWordsCount]);

  return (
    <div className={styles.GameWrapper}>
      <div className={styles.StatisticColumn}>
        <div className={styles.HeaderSpacer}></div>
        <div className={styles.ContentColumn}>
          <div className={styles.Column}>
            <div className={styles.ColumnTitle}>Score</div>
            <div className={styles.ColumnValue}>{currentScore}</div>
          </div>
          <div className={styles.Column}>
            <div className={styles.ColumnTitle}>Level</div>
            <div className={styles.ColumnValue}>{0}</div>
          </div>
          <div className={styles.Column}>
            <div className={styles.ColumnTitle}>Timer</div>
            <div className={styles.ColumnValue}>{0}</div>
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
        <div className={styles.HeaderSpacer}></div>
        <div className={styles.ContentColumn}>
          <div className={styles.Column}></div>
          <div className={styles.Column}></div>
          <div className={styles.Column}></div>
        </div>
      </div>
    </div>
  );
};
