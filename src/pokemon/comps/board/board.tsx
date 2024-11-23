import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './board.module.scss';
import ReactCardFlip from 'react-card-flip';
import { LEVELS } from '../../consts/levels.const';
import {
  PokemonLevel,
  PokemonLevelType,
} from '../../utils/pokemon-level.interface';
import { shuffle } from '../../../utils/functions/array-shuffle';
import { StatisticsColumn } from '../../../components/statistics/statistics';
import { CountdownApi } from 'react-countdown';

interface PokemonBoardProps {
  setIsRunning: Dispatch<SetStateAction<boolean>>;
}

export const Board = (props: PokemonBoardProps) => {
  const { setIsRunning } = props;
  const [levels, setLevels] = useState<PokemonLevel[]>(LEVELS);

  const [currentLevel, setCurrentLevel] = useState<PokemonLevel>(
    shuffle(levels)[0]
  );

  const [score, setScore] = useState<number>(0);

  const [chosen, setChosen] = useState<PokemonLevelType | undefined>();

  const [levelsPlayed, setLevelsPlayed] = useState<number[]>([]);

  const [countdownRef, setCountdownRef] = useState<CountdownApi | null>(null);
  const setPause = () => {
    countdownRef && countdownRef.pause();
  };
  const setStart = () => {
    countdownRef && countdownRef.start();
  };
  const nextPokemonLevel = (scored: boolean) => {
    setPause();
    if (scored) {
      setScore((prev) => {
        return prev + 1;
      });
    }
    setTimeout(() => {
      setChosen(undefined);
      setLevels((prev) => {
        const forUpdate = [...prev];
        const index = forUpdate.findIndex((l) => l.id === currentLevel?.id);
        setLevelsPlayed((prev) => {
          const updated = [...prev, index];
          return updated;
        });
        forUpdate.splice(index, 1);
        return forUpdate;
      });
      setCurrentLevel(shuffle(levels)[0]);
      setStart();
    }, 1500);
  };
  const finishGame = () => {
    setIsRunning(false);
  };
  return (
    <div className={styles.GameWrapperPokemon}>
      <StatisticsColumn
        isRunning={true}
        player={{
          name: 'PokemonPlayer',
          levelsPlayed,
          highscore: score,
          id: 289323,
        }}
        currentScore={score}
        setCountdownRef={setCountdownRef}
        game={{
          levelsPlayed,
          mode: 'CHATGPT',
          complexity: 'HARD',
          highscore: score,
          startedAt: Date.now() + 120000,
        }}
        finishGame={finishGame}
      />
      <div className={styles.Board}>
        <div className={styles.Hint}>{currentLevel.name}</div>

        <div className={styles.ChoiceWrapper}>
          <div className={styles.Card}>
            <Choice
              nextPokemonLevel={nextPokemonLevel}
              currentType={currentLevel.type}
              goalType='FRAMEWORK'
              setChosen={setChosen}
              chosen={chosen}
            />
          </div>
          <div className={styles.Card}>
            <Choice
              nextPokemonLevel={nextPokemonLevel}
              currentType={currentLevel.type}
              goalType='POKEMON'
              setChosen={setChosen}
              chosen={chosen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface ChoiceProps {
  nextPokemonLevel: (scored: boolean) => void;
  currentType: PokemonLevelType;
  goalType: PokemonLevelType;
  setChosen: Dispatch<SetStateAction<PokemonLevelType | undefined>>;
  chosen: PokemonLevelType | undefined;
}
export const Choice = (props: ChoiceProps) => {
  const { currentType, goalType, nextPokemonLevel, chosen, setChosen } = props;
  const isCorrect = currentType === goalType;
  const cardStyles: string[] = [styles.Choice, styles[isCorrect.toString()]];

  return (
    <ReactCardFlip
      flipDirection='horizontal'
      isFlipped={chosen && chosen === goalType}
    >
      <div
        className={styles.Choice}
        onClick={() => {
          if (chosen) {
            return;
          }
          setChosen(goalType);
          nextPokemonLevel(isCorrect);
        }}
      >
        <div className={styles.Title}>{goalType}</div>
      </div>
      <div className={cardStyles.join(' ')}>
        <div className={styles.Title}>{goalType}</div>
      </div>
    </ReactCardFlip>
  );
};
