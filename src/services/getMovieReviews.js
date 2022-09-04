import axios from 'axios';

export default async function getMovieReviews(movieId) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=c0978ead9c0d89a450cd9d2213b423d3&language=en-US&page=1`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
