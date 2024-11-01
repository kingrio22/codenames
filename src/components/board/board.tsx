import React, { useEffect, useState } from 'react';
import { CardComponent } from '../card/card';
import styles from './board.module.scss';
import { Card, Level } from '../levels/levels.const';

interface BoardProps {
  cards: Level['cards'];
  hint: string;
  nextLevel: (solved: boolean) => void;
}

const KEEP_CARDS_VISIBLE = 1000;

export const Board = (props: BoardProps) => {
  const { nextLevel, cards, hint } = props;
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

    if (chosens.filter((card) => card.isCorrect).length === 3) {
      setLevelFinished(true);
      setTimeout(() => {
        setChosens([]);
        nextLevel(true);
      }, KEEP_CARDS_VISIBLE);
      setTimeout(() => {
        setLevelFinished(false);
      }, KEEP_CARDS_VISIBLE + 600);
    }
  }, [chosens, nextLevel]);

  console.log('chosens: ', chosens);

  return (
    <div className={styles.BoardWrapper}>
      <div className={styles.HintRow}>{hint}</div>
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
  );
};
