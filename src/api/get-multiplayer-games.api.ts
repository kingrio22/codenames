import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Round } from '../utils/dtos/round.dto';
import { BASE_URL } from '../config/api.config';

export interface MultiplayerGame {
  id: number;
  hasToPlay: number;
  players: {
    id: number;
    name: string;
  };
  rounds: Round[];
}

export async function fetchGamesByPlayerId(
  id: number
): Promise<AxiosResponse<MultiplayerGame[]>> {
  try {
    const options: AxiosRequestConfig = {
      url: `${BASE_URL}/multiplayer-game/player/${id}`,
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
