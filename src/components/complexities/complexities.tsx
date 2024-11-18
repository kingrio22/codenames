import React from 'react';
import { CSSProperties } from '@mui/material/styles/createMixins';
import styles from './complexities.module.scss';
import { Star } from '../star/star';

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
      className={[styles.Low, styles.Box, styles[checked.toString()]].join(' ')}
      onClick={() => setComplexity('LOW')}
      style={stylings}
    >
      <div className={styles.Title}>easy</div>
      <div className={styles.Wrapper}>
        <Star filled={false} color={color} />
        <Star filled={true} color={color} />
        <Star filled={true} color={color} />
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
      className={[styles.Middle, styles.Box, styles[checked.toString()]].join(
        ' '
      )}
      style={stylings}
      onClick={() => setComplexity('MIDDLE')}
    >
      <div className={styles.Title}>medium</div>
      <div className={styles.Wrapper}>
        <Star filled={false} color={color} />
        <Star filled={false} color={color} />
        <Star filled={true} color={color} />
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
        <Star filled={false} color={color} />
        <Star filled={false} color={color} />
        <Star filled={false} color={color} />
      </div>
    </div>
  );
};
