import axios from 'axios';

export default async function searchQueryMovie({ query, page }) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=c0978ead9c0d89a450cd9d2213b423d3&language=en-US&query=${query}&page=${page}&include_adult=true`
    );
    return response;
  } catch (error) {
    console.error(error);
  }
}
