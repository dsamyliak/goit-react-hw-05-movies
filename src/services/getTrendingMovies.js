import axios from 'axios';

export default async function getTrendingMovies() {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=c0978ead9c0d89a450cd9d2213b423d3'
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
