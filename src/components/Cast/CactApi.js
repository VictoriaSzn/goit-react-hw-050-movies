import axios from 'axios';

export const CastApi = async movieId => {
  const config = {
    url: `/movie/${movieId}/credits`,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: 'd47b41929439187d961c9c4541d50141',
    },
  };

  const response = await axios(config);
  return response.data.cast;
};