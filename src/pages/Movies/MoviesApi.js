import axios from 'axios';

export const MoviesApi = async params => {
  const config = {
    url: `/search/movie`,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: 'd47b41929439187d961c9c4541d50141',
      query: params,
    },
  };

  const response = await axios(config);
  return response.data.results;
};