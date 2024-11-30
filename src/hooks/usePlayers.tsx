import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Player } from "../api/create-player";
import { fetchAllPlayers } from "../api/get-all-players";

export const usePlayers = (type: GameType) => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    getAllPlayers(type, setPlayers);
  }, [type]);

  return [players];
};

async function getAllPlayers(
  type: GameType,
  setPlayers: Dispatch<SetStateAction<Player[]>>
): Promise<void> {
  try {
    const { data: players } = await fetchAllPlayers(type);

    if (players) {
      setPlayers(players);
    }
    return;
  } catch (err) {
    alert("Cant fetch players");
  }
}

export type GameType = "CODENAMES" | "POKEMON";
