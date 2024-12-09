import React from 'react';
import styles from './multiplayer-game.module.scss';
import { Player } from '../../api/create-player';
import { useMultiplayerGames } from '../../hooks/useMultiplayerGames';

interface MultiplayerGameProps {
  player: Player | undefined;
}

export const MultiplayerGame = (props: MultiplayerGameProps) => {
  const { player } = props;
  const [multiplayerGames] = useMultiplayerGames(player?.id);
  return (
    <div className={styles.MultiplayerGameContainer}>
      <div className={styles.HighscoreWrapper}>
        <div className={styles.TitleWrapper}>
          <div className={styles.Title}>Multiplayer Games</div>
        </div>
      </div>
      {player ? (
        player.multiplayerGames?.map((player, index) => (
          <div className={styles.MultiplayerGameRow}></div>
        ))
      ) : (
        <span>Select Player</span>
      )}
    </div>
  );
};
