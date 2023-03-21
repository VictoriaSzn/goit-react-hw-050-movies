import axios from 'axios';

const url = 'https://api.themoviedb.org/3/trending/movie/week?api_key=d47b41929439187d961c9c4541d50141';

export const TrendingApi = async () => {
  const response = await axios(url);
  return response.data.results;
};