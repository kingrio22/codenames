import React, { useState } from 'react';
import styles from './card.module.scss';

import ReactCardFlip from 'react-card-flip';
import { Card } from '../levels/levels.const';

export const CardComponent = (props: Card) => {
  const { word, isCorrect } = props;

  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  return (
    <div className={styles.CardWrapper}>
      <div className={styles.Flipper} onClick={() => setIsFlipped(!isFlipped)}>
        <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
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
