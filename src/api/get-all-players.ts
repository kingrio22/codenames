import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL } from '../config/api.config';
import { Player } from './create-player';
import { GameType } from '../hooks/usePlayers';

export async function fetchAllPlayers(
  gameType: GameType
): Promise<AxiosResponse<Player[]>> {
  try {
    const options: AxiosRequestConfig = {
      url: `${BASE_URL}/player/all/:${gameType}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    return await axios.request(options);
  } catch (err) {
    console.log(err);
    throw new Error();
  }
}
