import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Player } from "../api/create-player";
import { fetchAllPlayers } from "../api/get-all-players";

export const usePlayers = (
  showError: Dispatch<SetStateAction<string | undefined>>,
  isRunning: boolean
) => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    getAllPlayers(setPlayers, showError);
  }, [showError, isRunning]);

  return [players];
};

async function getAllPlayers(
  setPlayers: Dispatch<SetStateAction<Player[]>>,
  setError: Dispatch<SetStateAction<string | undefined>>
): Promise<void> {
  try {
    const { data: players } = await fetchAllPlayers();

    if (players) {
      setPlayers(players);
    }
  } catch (err) {
    setError("Cant fetch players");
  }
}
