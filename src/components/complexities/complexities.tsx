import React from 'react';
import { CSSProperties } from '@mui/material/styles/createMixins';
import styles from './complexities.module.scss';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
interface ComplexityProps {
  setComplexity: (value: string) => void;
  checked: boolean;
}
export const LowComplexity = (props: ComplexityProps) => {
  const { checked, setComplexity } = props;

  const color = '#BEFC91';
  let stylings: CSSProperties = {
    '--color': color,
  };
  if (checked) {
    stylings['border'] = `3px solid ${color}`;
  }

  return (
    <div
      className={[styles.Box, styles[checked.toString()]].join(' ')}
      onClick={() => setComplexity('LOW')}
      style={stylings}
    >
      <div className={styles.Title}>easy</div>
      <div className={styles.Wrapper}>
        <StarRateRoundedIcon style={{ color }} />
        <StarBorderRoundedIcon style={{ color }} />
        <StarBorderRoundedIcon style={{ color }} />
      </div>
    </div>
  );
};

export const MiddleComplexity = (props: ComplexityProps) => {
  const { checked, setComplexity } = props;

  const color = '#FFDC7F';
  let stylings: CSSProperties = {
    '--color': color,
  };
  if (checked) {
    stylings['border'] = `3px solid ${color}`;
  }

  return (
    <div
      className={[styles.Box, styles[checked.toString()]].join(' ')}
      style={stylings}
      onClick={() => setComplexity('MIDDLE')}
    >
      <div className={styles.Title}>medium</div>
      <div className={styles.Wrapper}>
        <StarRateRoundedIcon style={{ color }} />
        <StarRateRoundedIcon style={{ color }} />
        <StarBorderRoundedIcon style={{ color }} />
      </div>
    </div>
  );
};

export const HardComplexity = (props: ComplexityProps) => {
  const { checked, setComplexity } = props;

  const color = '#FC9191';
  let stylings: CSSProperties = {
    '--color': color,
  };
  if (checked) {
    stylings['border'] = `3px solid ${color}`;
  }
  return (
    <div
      className={[styles.Box, styles[checked.toString()]].join(' ')}
      onClick={() => setComplexity('HARD')}
      style={stylings}
    >
      <div className={styles.Title}>hard</div>
      <div className={styles.Wrapper}>
        <StarRateRoundedIcon style={{ color }} />
        <StarRateRoundedIcon style={{ color }} />
        <StarRateRoundedIcon style={{ color }} />
      </div>
    </div>
  );
};
