import React, { Dispatch, SetStateAction } from 'react';
import styles from './card.module.scss';

import ReactCardFlip from 'react-card-flip';
import { Card } from '../levels/levels.const';

interface CardProps {
  hideCardColor: boolean;
  card: Card;
  isChosen: boolean;
  levelFinished: boolean;
  setChosens: Dispatch<SetStateAction<Card[]>>;
}
export const CardComponent = (props: CardProps) => {
  const {
    hideCardColor,
    levelFinished,
    setChosens,
    isChosen,
    card,
    card: { word, isCorrect },
  } = props;

  const cardStyles = hideCardColor
    ? [styles.Card]
    : [styles.Card, styles[isCorrect.toString()]];

  return (
    <div
      className={styles.CardWrapper}
      onClick={() => {
        if (levelFinished) {
          return;
        }
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
        <div className={cardStyles.join(' ')}>
          <div className={styles.Title}>{word}</div>
        </div>
      </ReactCardFlip>
    </div>
  );
};
