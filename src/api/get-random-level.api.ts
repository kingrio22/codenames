import axios, { AxiosRequestConfig } from "axios";
import { GameMode } from "../components/game/game";
import { Complexity } from "../components/game/game";
import { BASE_URL, BASE_HEADERS } from "../config/api.config";
import { Level } from "../components/levels/levels.const";

export async function getLevel(
  mode: GameMode,
  complexity: Complexity,
  playerId: number
): Promise<Level> {
  try {
    const options: AxiosRequestConfig = {
      url: `${BASE_URL}/levels/random-for-player/${mode}/${complexity}/${playerId}`,
      method: "GET",
      headers: BASE_HEADERS,
    };

    const { data } = await axios.request(options);
    return data;
    alert(`Level created with id: ${data.id}`);
  } catch (err) {
    console.log(err);
    alert("Etwas ist schief gelaufen");
    throw new Error();
  }
}
