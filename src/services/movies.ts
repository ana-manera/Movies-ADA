import { endpoints } from "../constants";
import { apiMovies } from "../utils/axios";

export const getCarousel = async () => {
    const response = await apiMovies.get(endpoints.movie_upcoming);
    return response.data.results;
  };