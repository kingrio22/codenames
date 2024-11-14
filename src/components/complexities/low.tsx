import React from 'react';
import styles from './complexities.module.scss';
import { Star } from '../star/star';

interface ComplexityProps {
  setComplexity: (value: string) => void;
  checked: boolean;
}
export const LowComplexity = (props: ComplexityProps) => {
  const { checked, setComplexity } = props;

  return (
    <div
      className={[styles.Low, styles.Box, styles[checked.toString()]].join(' ')}
      onClick={() => setComplexity('LOW')}
    >
      <div className={styles.Title}>LOW</div>
      <div className={styles.Wrapper}>
        <Star filled={false} />
        <Star filled={true} />
        <Star filled={true} />
      </div>
    </div>
  );
};

export const MiddleComplexity = (props: ComplexityProps) => {
  const { checked, setComplexity } = props;

  return (
    <div
      className={[styles.Middle, styles.Box, styles[checked.toString()]].join(
        ' '
      )}
      onClick={() => setComplexity('MIDDLE')}
    >
      <div className={styles.Title}>MID</div>
      <div className={styles.Wrapper}>
        <Star filled={false} />
        <Star filled={false} />
        <Star filled={true} />
      </div>
    </div>
  );
};

export const HardComplexity = (props: ComplexityProps) => {
  const { checked, setComplexity } = props;
  return (
    <div
      className={[styles.Hard, styles.Box, styles[checked.toString()]].join(
        ' '
      )}
      onClick={() => setComplexity('HARD')}
    >
      <div className={styles.Title}>HARD</div>
      <div className={styles.Wrapper}>
        <Star filled={false} />
        <Star filled={false} />
        <Star filled={false} />
      </div>
    </div>
  );
};
