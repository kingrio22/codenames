import React from 'react';
import styles from './card-input.module.scss';
import { Card } from '../levels/levels.const';

interface CardInputProps {
  card: Card;
  setValue: (value: Card) => void;
}
export const CardInput = (props: CardInputProps): JSX.Element => {
  const {
    card: { word = '', isCorrect = false },
    card,
    setValue,
  } = props;

  return (
    <div className={styles.CardInput}>
      <input
        type={'text'}
        value={word}
        onChange={(e) => setValue({ ...card, word: e.currentTarget.value })}
        placeholder='word'
      />
      <label htmlFor='isCorrect-input' style={{ marginLeft: '0.5rem' }}>
        Richtig
      </label>
      <input
        type={'checkbox'}
        checked={isCorrect}
        id='isCorrect-input'
        onChange={(e) =>
          setValue({ ...card, isCorrect: e.currentTarget.checked })
        }
      />
    </div>
  );
};
