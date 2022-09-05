import getMovieCast from '../../services/getMovieCast';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Cast = () => {
  const { movieId } = useParams();

  const [castHtml, setCastHtml] = useState('');

  useEffect(() => {
    getMovieCast(movieId).then(movieData => {
      setCastHtml(
        movieData.data.cast.map(castEl => (
          <li key={castEl.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${castEl.profile_path}`}
              alt={`Actor: ${castEl.name}`}
              width="10%"
            />
            <p>{castEl.name}</p>
            <p>Character: {castEl.character}</p>
          </li>
        ))
      );
    });
  }, [movieId]);

  return (
    <section>
      <h2>Cast</h2>
      <ul>{castHtml}</ul>
    </section>
  );
};
export default Cast;
