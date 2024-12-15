import React, { Dispatch, SetStateAction } from 'react';
import styles from './choose-player-icon.module.scss';

interface PlayerIcon {
  src: string;
  alt: string;
}
const PLAYER_ICONS: PlayerIcon[] = [
  {
    src: '../player1.png',
    alt: 'player icon',
  },
  {
    src: '../player2.png',
    alt: 'player icon',
  },
  {
    src: '../player3.png',
    alt: 'player icon',
  },
  {
    src: '../player4.png',
    alt: 'player icon',
  },
  {
    src: '../player5.png',
    alt: 'player icon',
  },
  {
    src: '../player6.png',
    alt: 'player icon',
  },
  {
    src: '../player7.png',
    alt: 'player icon',
  },
  {
    src: '../player8.png',
    alt: 'player icon',
  },
  {
    src: '../player9.png',
    alt: 'player icon',
  },
  {
    src: '../player10.png',
    alt: 'player icon',
  },
  {
    src: '../player11.png',
    alt: 'player icon',
  },
  {
    src: '../player12.png',
    alt: 'player icon',
  },
  {
    src: '../player14.png',
    alt: 'player icon',
  },
  {
    src: '../stewart.png',
    alt: 'player icon',
  },
];

interface ChoosePlayerIconProps {
  setPlayerIcon: Dispatch<SetStateAction<string | undefined>>;
}

export const ChoosePlayerIcon = (props: ChoosePlayerIconProps) => {
  const { setPlayerIcon } = props;

  return (
    <div className={styles.ChooseIconWrapper}>
      {PLAYER_ICONS.map((icon) => (
        <PlayerIconComp {...icon} />
      ))}
    </div>
  );
};
type PlayerIconProps = PlayerIcon;
export const PlayerIconComp = (props: PlayerIconProps) => {
  const { src, alt } = props;
  return (
    <div className={styles.IconWrapper}>
      <img src={src} alt={alt} />
    </div>
  );
};
