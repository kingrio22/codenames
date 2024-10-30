import React, { useEffect, useState } from 'react';
import { CardComponent } from '../card/card';
import styles from './board.module.scss';
import { Card, Level } from '../levels/levels.const';

interface BoardProps {
  level: Level;
  nextLevel: (solved: boolean) => void;
}

export const Board = (props: BoardProps) => {
  const { level, nextLevel } = props;
  const [chosens, setChosens] = useState<Card[]>([]);

  useEffect(() => {
    console.log('chosens: ', chosens);
    if (chosens.length === 0) {
      return;
    }
    if (chosens.some((card) => card.isCorrect === false)) {
      setChosens([]);
      nextLevel(false);
    }

    if (chosens.filter((card) => card.isCorrect).length === 3) {
      setChosens([]);
      nextLevel(true);
    }
  }, [chosens, nextLevel]);

  return (
    <div className={styles.BoardWrapper}>
      <div className={styles.HintRow}>{level.hint}</div>
      <div className={styles.Board}>
        {level.cards.map((card) => (
          <CardComponent
            card={card}
            setChosens={setChosens}
            isChosen={!!chosens.find((c) => c.id === card.id)}
          />
        ))}
      </div>
    </div>
  );
};
