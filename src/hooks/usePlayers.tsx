import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Player } from '../api/create-player';
import { fetchAllPlayers } from '../api/get-all-players';

export const usePlayers = (
  showError: Dispatch<SetStateAction<string | undefined>>,
  type: GameType
) => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    getAllPlayers(type, setPlayers, showError);
  }, [showError, type]);

  return [players];
};

async function getAllPlayers(
  type: GameType,
  setPlayers: Dispatch<SetStateAction<Player[]>>,
  setError: Dispatch<SetStateAction<string | undefined>>
): Promise<void> {
  try {
    const { data: players } = await fetchAllPlayers(type);

    if (players) {
      setPlayers(players);
    }
  } catch (err) {
    setError('Cant fetch players');
  }
}

export type GameType = 'CODENAMES' | 'POKEMON';
