import React from 'react';
import styles from './welcome-animation.module.scss';
import { Player } from '../../api/create-player';

interface WelcomeAnimationProps {
  player: Player | undefined;
}

export const WelcomeAnimation = (props: WelcomeAnimationProps) => {
  const { player } = props;

  if (!player) {
    return null;
  }
  return (
    <div className={styles.WelcomeAnimationContainer}>
      <div className={styles.textContainer}>
        <div className={styles.headline}>
          <div className={styles.message}>
            <div className={styles.word1}>Welcome {player.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
