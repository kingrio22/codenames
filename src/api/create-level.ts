import axios, { AxiosRequestConfig } from 'axios';
import { Level } from '../components/levels/levels.const';
import { BASE_URL } from '../utils/config/consts';

export async function createLevel(level: Level): Promise<undefined | void> {
  try {
    const options: AxiosRequestConfig = {
      url: `${BASE_URL}/levels`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: level,
    };

    return await axios.request(options).then();
  } catch (err) {
    console.log(err);
    return undefined;
  }
}
