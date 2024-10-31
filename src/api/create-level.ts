import axios, { AxiosRequestConfig } from 'axios';
import { Level } from '../components/levels/levels.const';

export async function createLevel(level: Level): Promise<void> {
  try {
    const options: AxiosRequestConfig = {
      url: 'localhost:4000/levels',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: level,
    };

    return await axios.request(options).then();
  } catch (err) {
    console.log(err);
    alert('Etwas ist schief gelaufen');
  }
}
