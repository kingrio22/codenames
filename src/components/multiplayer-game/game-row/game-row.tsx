import React from 'react';
import styles from '../wrapper/multiplayer-game.module.scss';
import { MultiplayerGame } from '../../../api/get-multiplayer-games.api';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

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
