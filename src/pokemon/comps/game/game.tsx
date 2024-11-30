import React, { Dispatch, SetStateAction, useState } from "react";
import { Board } from "../board/board";
import { Result } from "../../../components/result/resutl";

interface GameProps {
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  startedAt: number;
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
}

export const Game = (props: GameProps) => {
  const { score, setIsRunning, setScore } = props;
  const [showResult, setShowResult] = useState<boolean>(false);

  const onHideResult = () => {
    setIsRunning(false);
    setShowResult(false);
    setScore(0);
  };
  if (showResult) {
    return (
      <Result
        type="POKEMON"
        highscore={score}
        playerId={0}
        onHideResult={onHideResult}
      />
    );
  }

  return <Board {...props} setShowResult={setShowResult} />;
};
