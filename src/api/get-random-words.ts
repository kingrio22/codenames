import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL } from '../utils/config/consts';
import { Dispatch, SetStateAction } from 'react';

export async function getRandomWords(
  setLoading: Dispatch<SetStateAction<boolean>>,
  specification: string
): Promise<AxiosResponse<{ generatedWords: string[] }>> {
  try {
    setLoading(true);
    const options: AxiosRequestConfig = {
      url: `${BASE_URL}/chat-gpt/random-words`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: { specificationWords: specification },
    };

    return await axios.request(options);
  } catch (err) {
    console.log(err);
    throw new Error();
  } finally {
    setLoading(false);
  }
}
