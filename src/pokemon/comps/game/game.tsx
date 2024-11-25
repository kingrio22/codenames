import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './game.module.scss';
import { Board } from '../board/board';
import { Result } from '../../../components/result/resutl';

interface GameProps {
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  startedAt: number;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

export const Game = (props: GameProps) => {
  const { score } = props;
  const [showResult, setShowResult] = useState<boolean>(false);
  if (showResult) {
    return <Result type='POKEMON' highscore={score} playerId={0} />;
  }

  return <Board {...props} setShowResult={setShowResult} />;
};
