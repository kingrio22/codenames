import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './game.module.scss';
import { Board } from '../board/board';
import { Level } from '../levels/levels.const';
import { StartGameWrapper } from '../start-game-wrapper/start-game-wrapper';
import { shuffle } from '../../utils/functions/array-shuffle';
import { Highscore } from '../highscore/highscore';
import { Player } from '../../api/create-player';
import { updatePlayer } from '../../api/update-player';
import { getLevel } from '../../api/get-random-level.api';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';
import { CountdownApi } from 'react-countdown';
import { Result } from '../result/resutl';
import { MultiplayerGameComponent } from '../multiplayer-game/wrapper/multiplayer-game';
import { CreateGameModal } from '../multiplayer-game/create-game-modal/create-game-modal';
import { StatisticsColumn } from '../statistics/statistics';

export type Complexity = 'LOW' | 'MIDDLE' | 'HARD';
export interface GameProgress {
  complexity: Complexity;
  highscore: number;
  levelsPlayed: number[];
  startedAt: number;
  highscorePokemon: number;
}
interface GameProps {
  isRunning: boolean;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
}
export const Game = (props: GameProps) => {
  const { isRunning, setIsRunning } = props;
  const [game, setGame] = useState<GameProgress | undefined>();

  const [loading, setLoading] = useState<boolean>(false);

  const [player, setPlayer] = useState<Player | undefined>();

  const [showResult, setShowResult] = useState<boolean>(false);

  const [level, setLevel] = useState<Level | undefined>();

  const [countdownRef, setCountdownRef] = useState<CountdownApi | null>(null);

  const [showCreateGameModal, setShowCreateGameModal] =
    useState<boolean>(false);

  const setPause = () => {
    countdownRef && countdownRef.pause();
  };
  const setStart = () => {
    countdownRef && countdownRef.start();
  };

  const nextLevel = async (solved: number) => {
    if (!game || !player || !level) {
      return;
    }

    setLevel((prev) => {
      if (prev) {
        return { ...prev, cards: prev.cards.map((c) => ({ ...c, word: '' })) };
      }
    });

    setPause();
    const newLevel = await getLevel(
      player.id,
      [...game.levelsPlayed, level.id],
      setLoading
    );

    setGame((game) => {
      if (game && level) {
        return {
          ...game,
          levelsPlayed: [...game.levelsPlayed, level.id],
          highscore: game.highscore + solved,
        };
      }
      return game;
    });
    setLevel(undefined);

    if (newLevel) {
      const shuffledCards = shuffle(newLevel.cards);
      setLevel({ ...newLevel, cards: shuffledCards });
      setStart();
    } else {
      setIsRunning(false);
    }
  };

  const finishGame = async () => {
    if (!player || !game) {
      return;
    }
    await updatePlayer(game, player, 'CODENAMES');
    setLevel(undefined);
    setShowResult(true);
  };

  const onHideResult = () => {
    setShowResult(false);
    setGame(undefined);
    setPlayer(undefined);
    setIsRunning(false);
  };

  const [countdown] = useState<number>(120000);

  return (
    <div className={styles.GameWrapper}>
      <div className={styles.TopBar}>
        <div className={styles.Title}>C0D3N4M35</div>
      </div>

      <div className={styles.Content}>
        {loading && <LoadingSpinner />}

        <div className={styles.MultiplayerGames}>
          {isRunning === false && (
            <MultiplayerGameComponent
              player={player}
              setShowCreateGameModal={setShowCreateGameModal}
            />
          )}
        </div>

        <div className={styles.BoardWrapper}>
          {level && isRunning && game && player && (
            <Board
              hint={level.hint}
              cards={level.cards}
              correctWordsCount={level.correctWords}
              nextLevel={nextLevel}
              currentScore={game?.highscore}
              complexity={game?.complexity}
              finishGame={finishGame}
              game={game}
              isRunning={isRunning}
              player={player}
              setCountdownRef={setCountdownRef}
            />
          )}

          {isRunning === false && (
            <StartGameWrapper
              setGame={setGame}
              setIsRunning={setIsRunning}
              setLevel={setLevel}
              countdown={countdown}
              setPlayer={setPlayer}
              player={player}
              setLoading={setLoading}
            />
          )}
        </div>

        {player && isRunning === false && !showResult && (
          <div className={styles.PlayerStatisticsWrapper}>
            <StatisticsColumn
              game={undefined}
              isRunning={isRunning}
              playerName={player.name}
              finishGame={finishGame}
              currentScore={0}
              setCountdownRef={setCountdownRef}
              levelsPlayedCount={player.levelsPlayed.length}
            />
          </div>
        )}

        <div className={styles.SideBar}>
          {isRunning === false && <Highscore gameType='CODENAMES' />}
        </div>
      </div>
      {showResult && player && (
        <Result
          highscore={game?.highscore ?? 0}
          playerId={player?.id}
          type='CODENAMES'
          onHideResult={onHideResult}
        />
      )}
      {showCreateGameModal && (
        <CreateGameModal setShowCreateGameModal={setShowCreateGameModal} />
      )}
    </div>
  );
};
