import React, { Dispatch, SetStateAction } from 'react';
import styles from './complexity-input.module.scss';
import { FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { Complexity } from '../game/game';
import {
  HardComplexity,
  LowComplexity,
  MiddleComplexity,
} from '../complexities/low';

interface ComplexityInputProps {
  complexity: Complexity | undefined;
  setComplexity: (value: string) => void;
}

export const ComplexityInput = (props: ComplexityInputProps): JSX.Element => {
  const { complexity, setComplexity } = props;

  return (
    <RadioGroup className={styles.RadioGroupCustomized} row={true}>
      <FormControlLabel
        aria-labelledby='select-complexity'
        value=''
        control={
          <LowComplexity
            checked={complexity === 'LOW'}
            setComplexity={setComplexity}
          />
        }
        label=''
      />
      <FormControlLabel
        value=''
        control={
          <MiddleComplexity
            checked={complexity === 'MIDDLE'}
            setComplexity={setComplexity}
          />
        }
        label=''
      />
      <FormControlLabel
        value=''
        control={
          <HardComplexity
            checked={complexity === 'HARD'}
            setComplexity={setComplexity}
          />
        }
        label=''
      />
    </RadioGroup>
  );
};
