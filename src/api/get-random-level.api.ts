import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL, BASE_HEADERS } from "../config/api.config";
import { Level } from "../components/levels/levels.const";
import { Dispatch, SetStateAction } from "react";

export async function getLevel(
  playerId: number,
  levelIds: number[],
  setLoading: Dispatch<SetStateAction<boolean>> = () => null
): Promise<Level> {
  try {
    const options: AxiosRequestConfig = {
      url: `${BASE_URL}/levels/random-for-player/CHATGPT/${playerId}`,
      method: "POST",
      headers: BASE_HEADERS,
      data: {
        levelIds,
      },
    };
    setLoading(true);
    const { data } = await axios.request(options);
    return data;
  } catch (err) {
    console.log(err);
    alert("Etwas ist schief gelaufen");
    throw new Error();
  } finally {
    setLoading(false);
  }
}
