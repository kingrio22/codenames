import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './game-result.module.scss';
import { Complexity, GameMode, GameProgress } from '../game/game';
import Radio from '@mui/material/Radio';
import { StartButton } from '../start-button/start-button';
import { Level } from '../levels/levels.const';
import { FormControlLabel, FormLabel, RadioGroup } from '@mui/material';
interface GameResultProps {
  game: GameProgress | undefined;
  setIsRunning: Dispatch<SetStateAction<boolean>>;
  setGame: Dispatch<SetStateAction<GameProgress | undefined>>;
  setLevel: Dispatch<SetStateAction<Level | undefined>>;
  countdown: number;
}

export const GameResult = (props: GameResultProps) => {
  const [complexity, setComplexity] = useState<Complexity>('LOW');
  const [mode, setMode] = useState<GameMode>('INTERHYP');

  const { game, setGame, setIsRunning, setLevel, countdown } = props;
  return (
    <div className={styles.GameResult}>
      <div className={styles.Modal}>
        <div className={styles.ModalWrapper}>
          <h2>Game Over</h2>
          <h4>Dein spiel ist zu ende!</h4>
          <p>Dein Spielstand: {game?.highscore}</p>
          <div className={styles.Inputs}>
            <div className={styles.ComplexityInput}>
              <RadioGroup>
                <FormLabel id='select-complexity'>Schwierigkeitsgrad</FormLabel>

                <FormControlLabel
                  aria-labelledby='select-complexity'
                  value='leicht'
                  control={
                    <Radio
                      checked={complexity === 'LOW'}
                      onChange={() => setComplexity('LOW')}
                      value='LOW'
                      name='radio-buttons'
                    />
                  }
                  label='Leicht'
                />
                <FormControlLabel
                  value='mittel'
                  control={
                    <Radio
                      checked={complexity === 'MIDDLE'}
                      onChange={() => setComplexity('MIDDLE')}
                      value='MIDDLE'
                      name='radio-buttons'
                    />
                  }
                  label='Mittel'
                />
                <FormControlLabel
                  value='schwer'
                  control={
                    <Radio
                      checked={complexity === 'HARD'}
                      onChange={() => setComplexity('HARD')}
                      value='HARD'
                      name='radio-buttons'
                    />
                  }
                  label='Schwer'
                />
              </RadioGroup>
            </div>
            <div className={styles.GameModeInput}>
              <FormLabel id='select-mode'>Gegner</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value='Interhyp'
                  id='select-mode'
                  control={
                    <Radio
                      checked={mode === 'INTERHYP'}
                      onChange={() => setMode('INTERHYP')}
                      value='INTERHYP'
                      name='radio-buttons'
                    />
                  }
                  label='Interhyp'
                />
                <FormControlLabel
                  value='ChatGPT'
                  control={
                    <Radio
                      checked={mode === 'CHATGPT'}
                      onChange={() => setMode('CHATGPT')}
                      value='CHATGPT'
                      name='radio-buttons'
                    />
                  }
                  label='ChatGPT'
                />
              </RadioGroup>
            </div>
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
