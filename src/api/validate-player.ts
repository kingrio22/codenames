import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL } from "../config/api.config";

export async function validatePlayer(
  name: string
): Promise<AxiosResponse<{ result: string }>> {
  try {
    const options: AxiosRequestConfig = {
      url: `${BASE_URL}/player/validate`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { name },
    };

    return await axios.request(options);
  } catch (err) {
    console.log(err);
    throw new Error();
  }
}
