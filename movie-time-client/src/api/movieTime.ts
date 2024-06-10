import axios from "axios";
import { API_URL } from ".";
import { Movie } from "../models/movie";

export async function discover(): Promise<Record<string, Movie[]>> {
  const response = await axios.get(`${API_URL}/movies/discover`, {
    withCredentials: true,
  });
  return response.data;
}
