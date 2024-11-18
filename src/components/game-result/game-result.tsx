import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './game-result.module.scss';
import { Complexity, GameMode, GameProgress } from '../game/game';
import { StartButton } from '../start-button/start-button';
import { Level } from '../levels/levels.const';
import { TextField } from '@mui/material';
import { ComplexityInput } from '../inputs/complexity-input';
import { Player } from '../../api/create-player';
import { getPlayerByName } from '../../api/get-player-by-name';
import { NewPlayer } from '../player/create-player';
import { WelcomeAnimation } from '../welcome-animation/welcome-animation';
interface GameResultProps {
  game: GameProgress | undefined;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  setShowCreate: Dispatch<SetStateAction<boolean | undefined>>;
  setGame: Dispatch<SetStateAction<GameProgress | undefined>>;
  setLevel: Dispatch<SetStateAction<Level | undefined>>;
  player: Player | undefined;
  setPlayer: Dispatch<SetStateAction<Player | undefined>>;
  countdown: number;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const GameResult = (props: GameResultProps) => {
  const {
    game,
    setGame,
    setIsRunning,
    setLevel,
    countdown,
    setShowCreate,
    setPlayer,
    player,
    setLoading,
  } = props;

  const [complexity, setComplexity] = useState<Complexity>();
  const [mode, setMode] = useState<GameMode>('CHATGPT');
  const [name, setName] = useState<string>('');
  const [errorMessage, showError] = useState<string | undefined>();

  async function validateNameInput(name: string | undefined) {
    if (!name) {
      return;
    }
    const playerExists = await getPlayerByName(name);
    if (playerExists) {
      setPlayer(playerExists);
      showError(undefined);
    } else {
      showError('Spieler existiert nicht!');
    }
  }

  return (
    <div className={styles.GameResult}>
      <div className={styles.Modal}>
        <div className={styles.ModalWrapper}>
          <div className={styles.GameOver}>Start a new Game</div>
          <div className={styles.PlayerWrapper}>
            <div
              className={styles.PlayerNameInput}
              style={{
                transform: 'rotate(-2deg) translateX(3%) translateY(5%)',
              }}
            >
              <div className={styles.InputTitle}>Select existing Player</div>
              <TextField
                label='Name'
                onChange={(e) => setName(e.currentTarget.value)}
                required={true}
                value={name}
                onBlur={() => validateNameInput(name)}
                className={styles.TextInputCustom}
              ></TextField>

              {errorMessage && (
                <div className={styles.NameError}>{errorMessage}</div>
              )}
            </div>
            <div
              className={styles.PlayerNameInput}
              style={{
                transform: 'rotate(3deg) translateX(-3%) translateY(-5%)',
              }}
            >
              <div className={styles.InputTitle}>Create new player</div>
              <NewPlayer setPlayer={setPlayer} />
            </div>
          </div>

          <div className={styles.ChooseComplexity}>Select complexity level</div>
          <div className={styles.Complexity}>
            <ComplexityInput
              setComplexity={(value) => setComplexity(value as Complexity)}
              complexity={complexity}
            />
          </div>
          <div className={styles.Button}>
            <StartButton
              setGame={setGame}
              setIsRunning={setIsRunning}
              countdown={countdown}
              setLevel={setLevel}
              mode={mode}
              complexity={complexity}
              player={player}
              setLoading={setLoading}
            />
          </div>
        </div>
        <WelcomeAnimation player={player} />
      </div>
    </div>
  );
};
