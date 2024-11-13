import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './create-level.module.scss';
import { v1 } from 'uuid';
import { Card, Level } from './levels.const';
import { ComplexityInput } from '../inputs/complexity-input';
import { Complexity, GameMode } from '../game/game';
import { GameModeInput } from '../inputs/game-mode.input';
import { CardInput } from '../inputs/card-input';
import { createLevel } from '../../api/create-level';
import { getRandomWords } from '../../api/get-random-words';
import { shuffle } from '../../utils/functions/array-shuffle';

interface CreateLevelProps {
  showCreateLevelModal: Dispatch<SetStateAction<boolean | undefined>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export type CreateLevelDto = Omit<Level, 'id'>;

export const CreateLevel = (props: CreateLevelProps) => {
  const { showCreateLevelModal, setLoading } = props;

  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const [newLevel, setNewLevel] = useState<CreateLevelDto>({
    hint: '',
    cards: [],
    complexity: 'LOW',
    correctWords: 0,
    mode: 'INTERHYP',
  });

  const [suggestions, setSuggestions] = useState<string[] | undefined>();

  const [newCards, setNewCards] = useState<Card[]>(
    new Array(9)
      .fill({})
      .map((_card) => ({ id: v1(), word: '', isCorrect: false }))
  );

  const setProps = (prop: keyof CreateLevelDto, value: string | number) => {
    setNewLevel((level) => {
      return {
        ...level,
        [prop]: value,
      };
    });
  };

  const handleCreate = async () => {
    setErrorMessage(undefined);
    if (newCards.filter((c) => c.isCorrect === true).length < 1) {
      setErrorMessage('At least one card has to be a correct one');
      return;
    }
    if (
      newCards.filter((c) => c.isCorrect === true).length !==
      newLevel.correctWords
    ) {
      setErrorMessage(
        `The amount of correct cards do not match the correct words count`
      );
      return;
    }
    if (newCards.filter((c) => c.word.length < 1).length > 0) {
      setErrorMessage('Fill all cards');
      return;
    }
    if (newLevel.hint.length < 1) {
      setErrorMessage('Hint word is missing');
      return;
    }

    const levelId = await createLevel({ ...newLevel, cards: newCards });
    if (!levelId) {
      setErrorMessage('Sth went wrong');
    } else {
      setErrorMessage(`Level created with ID: ${levelId}`);
      setTimeout(() => {
        showCreateLevelModal(false);
        setErrorMessage(undefined);
      }, 1000);
    }
  };

  const shuflleSuggestions = () => {
    if (!suggestions) {
      return;
    }
    const selectedWords = shuffle(suggestions).splice(0, 9);

    const newCards = selectedWords.map((word) => ({
      id: v1(),
      word,
      isCorrect: false,
    }));
    setNewCards(newCards);
  };

  const generateAndShuffle = async () => {
    const {
      data: { generatedWords },
    } = await getRandomWords(setLoading);

    setSuggestions(generatedWords);
    shuflleSuggestions();
  };

  return (
    <div>
      <div className={styles.Title}>Create new level</div>
      <div className={styles.ModalWrapper}>
        <div className={styles.WordsTable}>
          <div className={styles.ShuffleWrapper}>
            <button
              className={styles.Button}
              onClick={() => generateAndShuffle()}
            >
              Generate
            </button>
            <button
              className={styles.Button}
              onClick={() => shuflleSuggestions()}
            >
              Shuffle
            </button>
          </div>

          <span className={styles.SubTitle}>Suggestions</span>
          {suggestions && (
            <div className={styles.WordsList}>
              <ul>
                {suggestions.map((word) => (
                  <li>{word}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={styles.CreateWrapper}>
          <div className={styles.BaseInfo}>
            <div className={styles.Hint}>
              <label htmlFor='hint'>Hint: </label>
              <input
                type='text'
                id='hint'
                onChange={(e) => setProps('hint', e.currentTarget.value)}
                value={newLevel['hint'] ?? ''}
              />
            </div>
            <div className={styles.CorrectWords}>
              <label htmlFor='correct-words'>Correct words count: </label>
              <input
                type='number'
                id='correct-words'
                onChange={(e) =>
                  setProps(
                    'correctWords',
                    parseInt(e.currentTarget.value.toString())
                  )
                }
                value={newLevel['correctWords']}
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
            <div className={styles.CardTitle}>Cards</div>

            <div className={styles.CardsCluster}>
              {newCards.map((card) => {
                return (
                  <CardInput
                    key={card.id}
                    card={card}
                    setValue={(value) =>
                      setNewCards((cards) => {
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
              Create
            </button>
            <button
              className={styles.Button}
              onClick={() => showCreateLevelModal(false)}
            >
              Cancel
            </button>
          </div>
          {errorMessage && (
            <div className={styles.ErrorMessage}>{errorMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
};
