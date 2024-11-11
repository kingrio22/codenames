import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from '../utils/config/consts';
import { CreateLevelDto } from '../components/levels/create-level';

export async function createLevel(
  level: CreateLevelDto
): Promise<undefined | void> {
  try {
    const options: AxiosRequestConfig = {
      url: `${BASE_URL}/levels`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: level,
    };

    const {
      data: { id },
    } = await axios.request(options);
    return id;
  } catch (err) {
    console.log(err);
    return undefined;
  }
}
