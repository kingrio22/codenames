import axios, { AxiosRequestConfig } from "axios";
import { CreateLevelDto } from "../components/levels/create-level";
import { BASE_URL, BASE_HEADERS } from "../config/api.config";
import { Level } from "../components/levels/levels.const";

export async function createLevel(level: CreateLevelDto): Promise<Level> {
  try {
    const options: AxiosRequestConfig = {
      url: `${BASE_URL}/levels/random`,
      method: "GET",
      headers: BASE_HEADERS,
    };

    const { data } = await axios.request(options);
    return data;
    alert(`Level created with id: ${data.id}`);
  } catch (err) {
    console.log(err);
    alert("Etwas ist schief gelaufen");
    throw new Error();
  }
}
