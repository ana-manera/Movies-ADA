import axios from "axios";

export const apiRequest = axios.create ({

    baseURL: "https://movies-38f90-default-rtdb.firebaseio.com",
    params: {
        api_key: "prueba-api-key"
    }
}) 

export const apiMovies = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
      api_key: "0bce2b3619ac231ad6ce364b6d8015ab",
    },
  });