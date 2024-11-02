import axios, { AxiosRequestConfig } from "axios";
import { CreateLevelDto } from "../components/levels/create-level";
export async function createLevel(level: CreateLevelDto): Promise<void> {
  try {
    const options: AxiosRequestConfig = {
      url: "http://localhost:4000/levels",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "true",
      },
      data: level,
    };

    const { data } = await axios.request(options);
    alert(`Level created with id: ${data.id}`);
  } catch (err) {
    console.log(err);
    alert("Etwas ist schief gelaufen");
  }
}
