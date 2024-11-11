import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/config/consts";
import { Player } from "./create-player";
import { GameProgress } from "../components/game/game";

export async function updatePlayer(
  game: GameProgress,
  player: Player
): Promise<void> {
  const updatePlayerDto: Omit<Player, "id"> = {
    highscore: game.highscore,
    levelsPlayed: game.levelsPlayed,
    name: player.name,
  };

  try {
    const options: AxiosRequestConfig = {
      url: `${BASE_URL}/player/${player.id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      data: updatePlayerDto,
    };

    return await axios.request(options);
  } catch (err) {
    console.log(err);
    throw new Error();
  }
}
