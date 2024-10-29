import React from 'react';
import { CardComponent } from '../card/card';
import styles from './board.module.scss';
import { Level } from '../levels/levels.const';

interface BoardProps {
  level: Level;
}

export const Board = (props: BoardProps) => {
  const { level } = props;
  return (
    <div className={styles.BoardWrapper}>
      <div className={styles.HintRow}>{level.hint}</div>
      <div className={styles.Board}>
        {level.cards.map((card) => (
          <CardComponent {...card} />
        ))}
      </div>
    </div>
  );
};
