import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  MultiplayerGame,
  fetchGamesByPlayerId,
} from '../api/get-multiplayer-games.api';

export const useMultiplayerGames = (id: number | undefined) => {
  const [games, setGames] = useState<MultiplayerGame[]>([]);

  useEffect(() => {
    if (!id) {
      return;
    }
    getMultiplayerGamesByPlayerId(id, setGames);
  }, [id]);

  return [games];
};

async function getMultiplayerGamesByPlayerId(
  id: number,
  setGames: Dispatch<SetStateAction<MultiplayerGame[]>>
): Promise<void> {
  try {
    const { data: multiplayerGames } = await fetchGamesByPlayerId(id);

    if (multiplayerGames) {
      setGames(multiplayerGames);
    }
    return;
  } catch (err) {
    alert('Cant fetch games');
  }
}
