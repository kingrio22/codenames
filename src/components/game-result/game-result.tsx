import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './game-result.module.scss';
import { Complexity, GameMode, GameProgress } from '../game/game';
import Radio from '@mui/material/Radio';
import { StartButton } from '../start-button/start-button';
import { Level } from '../levels/levels.const';
import {
  FormControlLabel,
  FormLabel,
  RadioGroup,
  TextField,
} from '@mui/material';

import { ComplexityInput } from '../inputs/complexity-input';
import { GameModeInput } from '../inputs/game-mode.input';
interface GameResultProps {
  game: GameProgress | undefined;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  setShowCreate: Dispatch<SetStateAction<boolean | undefined>>;
  setShowNewPlayer: Dispatch<SetStateAction<boolean>>;
  setGame: Dispatch<SetStateAction<GameProgress | undefined>>;
  setLevel: Dispatch<SetStateAction<Level | undefined>>;
  countdown: number;
}

export const GameResult = (props: GameResultProps) => {
  const [complexity, setComplexity] = useState<Complexity>('LOW');
  const [mode, setMode] = useState<GameMode>('INTERHYP');
  const [name, setName] = useState<string>('');
  const {
    game,
    setGame,
    setIsRunning,
    setLevel,
    countdown,
    setShowCreate,
    setShowNewPlayer,
  } = props;
  return (
    <div className={styles.GameResult}>
      <div className={styles.Modal}>
        <div className={styles.ModalWrapper}>
          <div className={styles.ButtonRow}>
            <button
              className={styles.createButton}
              onClick={() => setShowNewPlayer(true)}
            >
              New Player
            </button>
            <button
              onClick={() => setShowCreate(true)}
              className={styles.createButton}
            >
              Create Level
            </button>
          </div>
          <span style={{ fontSize: '28px', fontWeight: 'bold' }}>
            Game Over
          </span>
          <h4>Dein spiel ist zu ende!</h4>
          <p>Dein Spielstand: {game?.highscore}</p>
          <div className={styles.Inputs}>
            <ComplexityInput
              setComplexity={(value) => setComplexity(value as Complexity)}
              complexity={complexity}
            />
            <GameModeInput
              setMode={(value: string) => setMode(value as GameMode)}
              mode={mode}
            />
            <TextField
              label='Name'
              onChange={(e) => setName(e.currentTarget.value)}
              required={true}
              value={name}
            ></TextField>
          </div>
          <p>du bisch 1 loser</p>
          <div className={styles.Button}>
            <StartButton
              setGame={setGame}
              setIsRunning={setIsRunning}
              countdown={countdown}
              setLevel={setLevel}
              mode={mode}
              complexity={complexity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
