import { endpoints } from "../constants";
import { apiMovies } from "../utils/axios";

const getCarousel = async () => {
    const response = await apiMovies.get(endpoints.movie_upcoming);
    return response.data.results;
  };

const getAllPopular =  async () => {
  const response = await apiMovies.get(endpoints.movie_popular );
  return response.data;
};

const getAllTopRated =  async () => {
  const response = await apiMovies.get(endpoints.movie_top_rated );
  return response.data;
};

export const servicesMovies = { getCarousel, getAllPopular, getAllTopRated }


