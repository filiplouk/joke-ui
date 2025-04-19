import axiosInstance from "@/@libs/Axios/Axios";
import type { JokeResponseDto } from "./@dtos/JokeResponse.dto";

export class JokeService {
  static async getRandomJoke(): Promise<JokeResponseDto> {
    const result = await axiosInstance.get("/random_joke");
    return result.data;
  }
  static async getProgrammingJoke(): Promise<JokeResponseDto> {
    const result = await axiosInstance.get("/programming_joke");
    return result.data;
  }
}
