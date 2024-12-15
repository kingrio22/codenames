import React, { Dispatch, SetStateAction } from 'react';
import styles from './multiplayer-game.module.scss';
import { Player } from '../../../api/create-player';
import { useMultiplayerGames } from '../../../hooks/useMultiplayerGames';
import { MultiplayerGameRow } from '../game-row/game-row';

interface MultiplayerGameProps {
  player: Player | undefined;
  setShowCreateGameModal: Dispatch<SetStateAction<boolean>>;
}

export const MultiplayerGameComponent = (props: MultiplayerGameProps) => {
  const { player, setShowCreateGameModal } = props;
  const [multiplayerGames] = useMultiplayerGames(player?.id);

  const startNewGame = () => {
    setShowCreateGameModal(true);
    return;
  };
  return (
    <div className={styles.MultiplayerGameContainer}>
      <div className={styles.MultiplayerGameWrapper}>
        <div className={styles.TitleWrapper}>
          <div className={styles.Title}>Multiplayer Games</div>
        </div>
        {player && (
          <div className={styles.CreateNewGame}>
            <button className={styles.NewGameButton} onClick={startNewGame}>
              New Game
            </button>
          </div>
        )}

        {multiplayerGames && player ? (
          multiplayerGames.map((game, index) => (
            <MultiplayerGameRow game={game} key={index} playerId={player.id} />
          ))
        ) : (
          <span>Select Player</span>
        )}
      </div>
    </div>
  );
};
