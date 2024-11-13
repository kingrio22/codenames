import axios, { AxiosRequestConfig } from 'axios';
import { GameMode } from '../components/game/game';
import { Complexity } from '../components/game/game';
import { BASE_URL, BASE_HEADERS } from '../config/api.config';
import { Level } from '../components/levels/levels.const';
import { Dispatch, SetStateAction } from 'react';

export async function getLevel(
  mode: GameMode,
  complexity: Complexity,
  playerId?: number,
  setLoading: Dispatch<SetStateAction<boolean>> = () => null
): Promise<Level> {
  try {
    const options: AxiosRequestConfig = {
      url: `${BASE_URL}/levels/random-for-player/${mode}/${complexity}/${playerId}`,
      method: 'GET',
      headers: BASE_HEADERS,
    };
    setLoading(true);
    const { data } = await axios.request(options);
    return data;
  } catch (err) {
    console.log(err);
    alert('Etwas ist schief gelaufen');
    throw new Error();
  } finally {
    setLoading(false);
  }
}
