import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { CardComponent } from '../card/card';
import styles from './board.module.scss';
import { Complexity, GameProgress } from '../game/game';
import { Card, Level } from '../levels/levels.const';
import { CountDownTimer } from '../countdown/countdown';
import { Player } from '../../api/create-player';
import { CountdownApi } from 'react-countdown';
import { StatisticsColumn } from '../statistics/statistics';

interface BoardProps {
  cards: Level['cards'];
  hint: string;
  nextLevel: (solved: number) => void;
  correctWordsCount: number;
  currentScore: number | undefined;
  complexity: Complexity | undefined;
  finishGame: () => void;
  game: GameProgress;
  isRunning: boolean;
  player: Player;
  setCountdownRef: Dispatch<SetStateAction<CountdownApi | null>>;
}

const KEEP_CARDS_VISIBLE = 1000;

export const Board = (props: BoardProps) => {
  const {
    nextLevel,
    complexity = 'LOW',
    cards,
    hint,
    correctWordsCount,
    currentScore = 0,
    finishGame,
    isRunning,
    game,
    player,
    setCountdownRef,
  } = props;
  const [chosens, setChosens] = useState<Card[]>([]);

  const [levelFinished, setLevelFinished] = useState<boolean>(false);

  useEffect(() => {
    if (chosens.length === 0) {
      return;
    }
    if (
      complexity === 'HARD' &&
      chosens.some((card) => card.isCorrect === false)
    ) {
      setLevelFinished(true);
      setTimeout(() => {
        setChosens([]);
        nextLevel(0);
      }, KEEP_CARDS_VISIBLE);
      setTimeout(() => {
        setLevelFinished(false);
      }, KEEP_CARDS_VISIBLE + 600);
    } else if (chosens.length === correctWordsCount) {
      setLevelFinished(true);
      setTimeout(() => {
        const points = getPointsByComplexity(chosens, complexity);
        nextLevel(points);
        setChosens([]);
      }, KEEP_CARDS_VISIBLE);
      setTimeout(() => {
        setLevelFinished(false);
      }, KEEP_CARDS_VISIBLE + 600);
    }
  }, [chosens, nextLevel, complexity, correctWordsCount]);

  return (
    <div className={styles.GameWrapper}>
      <StatisticsColumn
        game={game}
        isRunning={isRunning}
        player={player}
        finishGame={finishGame}
        currentScore={currentScore}
        setCountdownRef={setCountdownRef}
      />
      <div className={styles.BoardWrapper}>
        <div className={styles.HintRow}>
          {hint}
          <div className={styles.correctWords}>{correctWordsCount}</div>
        </div>

        <div className={styles.Board}>
          {cards.map((card) => (
            <CardComponent
              card={card}
              setChosens={setChosens}
              isChosen={!!chosens.find((c) => c.id === card.id)}
              hideCardColor={chosens.length === 0}
              levelFinished={levelFinished}
            />
          ))}
        </div>
      </div>
      <div className={styles.FakeColumn}>
        <div className={styles.Row}>
          <div className={styles.Column}></div>
          <div className={styles.Column}></div>
          <div className={styles.Column}></div>
        </div>
      </div>
    </div>
  );
};
function getPointsByComplexity(
  chosens: Card[],
  complexity: Complexity
): number {
  const correct = chosens.filter((card) => card.isCorrect === true).length;
  const notCorrect = chosens.filter((card) => card.isCorrect === false).length;

  switch (complexity) {
    case 'LOW':
      return correct;

    case 'MIDDLE':
      return correct < notCorrect ? 0 : (correct - notCorrect) * 2;

    case 'HARD':
      return correct * 5;
  }
}
