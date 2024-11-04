import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styles from './create-level.module.scss';
import { v1 } from 'uuid';
import { Card, Level } from './levels.const';
import { ComplexityInput } from '../inputs/complexity-input';
import { Complexity, GameMode } from '../game/game';
import { GameModeInput } from '../inputs/game-mode.input';
import { CardInput } from '../inputs/card-input';
import { createLevel } from '../../api/create-level';

interface CreateLevelProps {
  showCreateLevelModal: Dispatch<SetStateAction<boolean | undefined>>;
}

export const CreateLevel = (props: CreateLevelProps) => {
  const { showCreateLevelModal } = props;

  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [newLevel, setNewLevel] = useState<Level>({} as Level);
  const [newCards, setNewCards] = useState<Card[]>(
    new Array(9)
      .fill({})
      .map((_card) => ({ id: v1(), word: '', isCorrect: false }))
  );

  const setProps = (prop: keyof Level, value: string) => {
    setNewLevel((level) => {
      return {
        ...level,
        [prop]: value,
      };
    });
  };

  const handleCreate = async () => {
    try {
      setErrorMessage(undefined);
      if (newCards.filter((c) => c.isCorrect === true).length !== 3) {
        setErrorMessage('Es müssen 3 Karten richtig sein');
        return;
      }
      if (newCards.filter((c) => c.word.length < 1).length > 0) {
        setErrorMessage('Es sind nicht alle Karten befüllt');
        return;
      }
      const level = await createLevel(newLevel);
      if (!level) {
        setErrorMessage('Etwas ist schief gelaufen');
      }
      showCreateLevelModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className={styles.Title}>Neues Level erstellen</div>
      <div className={styles.CreateWrapper}>
        <div className={styles.BaseInfo}>
          <div className={styles.Hint}>
            <label htmlFor='hint'>Hinweis Wort: </label>
            <input
              type='text'
              id='hint'
              onChange={(e) => setProps('hint', e.currentTarget.value)}
              value={newLevel['hint'] ?? ''}
            />
          </div>
          <div className={styles.Complexity}>
            <ComplexityInput
              complexity={(newLevel['complexity'] as Complexity) ?? 'LOW'}
              setComplexity={(value) => setProps('complexity', value)}
            />
          </div>

          <div className={styles.Mode}>
            <GameModeInput
              mode={(newLevel['mode'] as GameMode) ?? 'INTERHYP'}
              setMode={(value) => setProps('complexity', value)}
            />
          </div>
        </div>
        <div className={styles.CardsWrapper}>
          <div className={styles.CardTitle}>Karten erstellen</div>
          <div className={styles.CardHint}>
            Es können maximal 3 Karten richtig sein
          </div>
          <div className={styles.CardsCluster}>
            {newCards.map((card) => {
              return (
                <CardInput
                  key={card.id}
                  card={card}
                  setValue={(value) =>
                    setNewCards((cards) => {
                      if (
                        cards.filter((c) => c.isCorrect).length === 3 &&
                        value.isCorrect === true
                      ) {
                        return cards;
                      }
                      const relatedIndex = cards.findIndex(
                        (c) => c.id === value.id
                      );
                      const udpatedCard = {
                        id: value.id,
                        isCorrect: value.isCorrect,
                        word: value.word,
                      };
                      const updatedCards = [...cards];
                      updatedCards[relatedIndex] = udpatedCard;
                      return updatedCards;
                    })
                  }
                />
              );
            })}
          </div>
        </div>
        <div className={styles.ButtonWrapper}>
          <button
            className={styles.Button}
            type='button'
            onClick={handleCreate}
          >
            Level erstellen
          </button>
          <button
            className={styles.Button}
            onClick={() => showCreateLevelModal(false)}
          >
            Abbrechen
          </button>
        </div>
        {errorMessage && (
          <div className={styles.ErrorMessage}>{errorMessage}</div>
        )}
      </div>
    </div>
  );
};
