import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL } from '../utils/config/consts';

export interface Player {
  levelsPlayed: number[];
  highscore: number;
  name: string;
  id: number;
}

export async function createPlayer(
  name: string
): Promise<AxiosResponse<Player>> {
  try {
    const options: AxiosRequestConfig = {
      url: `${BASE_URL}/player`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { name },
    };

    return await axios.request(options);
  } catch (err) {
    console.log(err);
    throw new Error();
  }
}