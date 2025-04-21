import axiosInstance from "@/@libs/Axios/Axios";
import type { Joke } from "./Joke.entity";

export class JokeService {
  static async getRandomJoke(): Promise<Joke[]> {
    const result = await axiosInstance.get("/jokes/general/random");
    return result.data;
  }
  static async getProgrammingJoke(): Promise<Joke[]> {
    const result = await axiosInstance.get("/jokes/programming/random");
    return result.data;
  }
}
