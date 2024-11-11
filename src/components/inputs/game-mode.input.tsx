import React from 'react';
import styles from './game-mode.module.scss';
import { GameMode } from '../game/game';
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';

interface GameModeInputProps {
  mode: GameMode;
  setMode: (value: string) => void;
}

export const GameModeInput = (props: GameModeInputProps): JSX.Element => {
  const { mode, setMode } = props;
  return (
    <div className={styles.GameModeInput}>
      <FormLabel id='select-mode'>Mode</FormLabel>
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
          disabled={true}
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
  );
};
