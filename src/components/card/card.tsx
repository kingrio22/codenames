import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './card.module.scss';

import ReactCardFlip from 'react-card-flip';
import { Card } from '../levels/levels.const';

interface CardProps {
  card: Card;
  isChosen: boolean;
  setChosens: Dispatch<SetStateAction<Card[]>>;
}
export const CardComponent = (props: CardProps) => {
  const {
    setChosens,
    isChosen,
    card,
    card: { word, isCorrect },
  } = props;

  return (
    <div className={styles.CardWrapper}>
      <div
        className={styles.Flipper}
        onClick={() => {
          setChosens((chosens) => {
            if (isChosen) {
              return chosens;
            }

            return [...chosens, card];
          });
        }}
      >
        <ReactCardFlip isFlipped={isChosen} flipDirection='horizontal'>
          <div className={styles.Card}>
            <div className={styles.Title}>{word}</div>
          </div>
          <div
            className={[styles.Card, styles[isCorrect.toString()]].join(' ')}
          >
            <div className={styles.Title}>{word}</div>
          </div>
        </ReactCardFlip>
      </div>
    </div>
  );
};
