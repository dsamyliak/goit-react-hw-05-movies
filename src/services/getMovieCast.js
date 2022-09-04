import axios from 'axios';

export default async function getMovieCast(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c0978ead9c0d89a450cd9d2213b423d3&language=en-US`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
