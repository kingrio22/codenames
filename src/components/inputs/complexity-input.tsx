import React, { Dispatch, SetStateAction } from 'react';
import styles from './complexity-input.module.scss';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { Complexity } from '../game/game';
import {
  HardComplexity,
  LowComplexity,
  MiddleComplexity,
} from '../complexities/complexities';
import FormControlContext from '@mui/material/FormControl/FormControlContext';

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
        label={null}
        style={{
          margin: 0,
          width: '25%',
          transform: 'rotate(-3deg) translateX(10%) translateY(-5%)',
        }}
      />
      <FormControlLabel
        value=''
        control={
          <MiddleComplexity
            checked={complexity === 'MIDDLE'}
            setComplexity={setComplexity}
          />
        }
        label={null}
        style={{
          margin: 0,
          width: '25%',
        }}
      />
      <FormControlLabel
        value=''
        control={
          <HardComplexity
            checked={complexity === 'HARD'}
            setComplexity={setComplexity}
          />
        }
        label={null}
        style={{
          margin: 0,
          width: '25%',
          transform: 'rotate(3deg) translateX(-10%) translateY(-15%)',
        }}
      />
    </RadioGroup>
  );
};
