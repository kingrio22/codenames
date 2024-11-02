import axios, { AxiosRequestConfig } from "axios";
import { CreateLevelDto } from "../components/levels/create-level";
import { BASE_URL, BASE_HEADERS } from "../config/api.config";
export async function createLevel(level: CreateLevelDto): Promise<void> {
  try {
    const options: AxiosRequestConfig = {
      url: `${BASE_URL}/levels`,
      method: "POST",
      headers: BASE_HEADERS,
      data: level,
    };

    const { data } = await axios.request(options);
    alert(`Level created with id: ${data.id}`);
  } catch (err) {
    console.log(err);
    alert("Etwas ist schief gelaufen");
  }
}
