import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "./board.module.scss";
import ReactCardFlip from "react-card-flip";
import { LEVELS } from "../../consts/levels.const";
import {
  PokemonLevel,
  PokemonLevelType,
} from "../../utils/pokemon-level.interface";
import { shuffle } from "../../../utils/functions/array-shuffle";
import { StatisticsColumn } from "../../../components/statistics/statistics";
import { CountdownApi } from "react-countdown";

interface PokemonBoardProps {
  startedAt: number;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  setShowResult: Dispatch<SetStateAction<boolean>>;
}

export const Board = (props: PokemonBoardProps) => {
  const { startedAt, setScore, setShowResult, score } = props;
  const [levels, setLevels] = useState<PokemonLevel[]>(LEVELS);

  const [currentLevel, setCurrentLevel] = useState<PokemonLevel>(
    shuffle(levels)[0]
  );

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
          const updated = Array.from(new Set([...prev, index]));
          return updated;
        });
        forUpdate.splice(index, 1);
        return forUpdate;
      });

      setStart();
    }, 900);
    setTimeout(() => {
      setCurrentLevel(shuffle(levels)[0]);
    }, 1600);
  };
  const finishGame = () => {
    setShowResult(true);
  };
  return (
    <div className={styles.GameWrapperPokemon}>
      <StatisticsColumn
        isRunning={true}
        playerName={"PokemonPlayer"}
        levelsPlayedCount={levelsPlayed.length}
        currentScore={score}
        setCountdownRef={setCountdownRef}
        game={{
          levelsPlayed,
          complexity: "HARD",
          highscore: 0,
          startedAt: startedAt + 60000,
          highscorePokemon: score,
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
              goalType="FRAMEWORK"
              setChosen={setChosen}
              chosen={chosen}
            />
          </div>
          <div className={styles.Card}>
            <Choice
              nextPokemonLevel={nextPokemonLevel}
              currentType={currentLevel.type}
              goalType="POKEMON"
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
      flipDirection="horizontal"
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
      <div className={cardStyles.join(" ")}>
        <div className={styles.Title}>{goalType}</div>
      </div>
    </ReactCardFlip>
  );
};
