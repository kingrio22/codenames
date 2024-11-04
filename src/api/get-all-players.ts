import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL } from '../utils/config/consts';
import { Player } from './create-player';

export async function fetchAllPlayers(): Promise<AxiosResponse<Player[]>> {
  try {
    const options: AxiosRequestConfig = {
      url: `${BASE_URL}/player/all`,
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
