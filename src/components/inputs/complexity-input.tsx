import React from 'react';
import styles from './complexity-input.module.scss';
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Complexity } from '../game/game';

interface ComplexityInputProps {
  complexity: Complexity;
  setComplexity: (value: string) => void;
}

export const ComplexityInput = (props: ComplexityInputProps): JSX.Element => {
  const { complexity, setComplexity } = props;

  return (
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
  );
};
