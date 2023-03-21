import axios from 'axios';

export const ReviewsApi = async movieId => {
  const config = {
    url: `/movie/${movieId}/reviews`,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
      api_key: 'd47b41929439187d961c9c4541d50141',
    },
  };

  const response = await axios(config);
  return response.data.results;
};