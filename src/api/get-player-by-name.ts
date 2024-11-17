import axios, { AxiosRequestConfig, isAxiosError } from "axios";
import { BASE_URL } from "../config/api.config";
import { Player } from "./create-player";

export async function getPlayerByName(
  name: string
): Promise<Player | undefined> {
  try {
    const options: AxiosRequestConfig = {
      url: `${BASE_URL}/player/name/${name}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    return (await axios.request(options)).data;
  } catch (err) {
    if (isAxiosError(err)) {
      if (err.response?.status === 404) {
        return undefined;
      }
    }
    console.log(err);
    throw new Error();
  }
}
