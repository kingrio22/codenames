import React from 'react';
import styles from './multiplayer-game.module.scss';
import { Player } from '../../api/create-player';
import { useMultiplayerGames } from '../../hooks/useMultiplayerGames';
import { MultiplayerGame } from '../../api/get-multiplayer-games.api';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

interface MultiplayerGameProps {
  player: Player | undefined;
}

export const MultiplayerGameComponent = (props: MultiplayerGameProps) => {
  const { player } = props;
  const [multiplayerGames] = useMultiplayerGames(player?.id);

  const startNewGame = () => {
    return;
  };
  return (
    <div className={styles.MultiplayerGameContainer}>
      <div className={styles.HighscoreWrapper}>
        <div className={styles.TitleWrapper}>
          <div className={styles.Title}>Multiplayer Games</div>
        </div>
        {/* {player && (
          <div className={styles.CreateNewGame}>
            <button
              className={styles.NewGameButton}
              onClick={startNewGame}
            ></button>
          </div>
        )} */}
      </div>
      {multiplayerGames && player ? (
        multiplayerGames.map((game, index) => (
          <MultiplayerGameRow game={game} key={index} playerId={player.id} />
        ))
      ) : (
        <span>Select Player</span>
      )}
    </div>
  );
};
interface MultiplayerGameRowProps {
  game: MultiplayerGame;
  key: number;
  playerId: number;
}
export const MultiplayerGameRow = (props: MultiplayerGameRowProps) => {
  const { game, key, playerId } = props;
  const opponentsName =
    game.players.find((p) => p.id !== playerId)?.name ?? 'NOT FOUND';

  const hasToPlay = getHasToPlay(game.hasToPlay, playerId);
  return (
    <div key={key} className={styles.MultiplayerGameRow}>
      <div className={styles.Opponent}>{opponentsName}</div>
      <div className={styles.Round}>{game.rounds.length}</div>
      <div className={styles.HasToPlayWrapper}>{hasToPlay}</div>
    </div>
  );
};

function getHasToPlay(hasToPlay: number, loggedPlayerId: number) {
  if (hasToPlay !== loggedPlayerId) {
    return <HourglassTopIcon className={styles.IconSpinner} />;
  }
  return <button className={styles.YourTurn}>Your Turn</button>;
}
