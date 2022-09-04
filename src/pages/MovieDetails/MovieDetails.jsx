import { MovieInfo } from 'components/MovieDetails/MovieInfo';
import { lazy, Suspense, useState, useEffect } from 'react';
import { useParams, useLocation, Outlet, Link } from 'react-router-dom';
import getMovieById from '../../services/getMovieById';

// import { BackLink } from '../components/BackLink';

const BackLink = lazy(() => import('../../components/BackLink/BackLink'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const BackLinkHref = location.state?.from ?? '/movies';

  const [dataMovie, setDataMovie] = useState({});
  const [imageSrc, setImageSrc] = useState('');
  const [dataGenres, setDataGenres] = useState('');
  const [dataRelease, setDataRelease] = useState('');

  useEffect(() => {
    getMovieById(movieId).then(movieData => {
      setDataMovie(movieData.data);
      setImageSrc(
        `https://image.tmdb.org/t/p/w500${movieData.data.poster_path}`
      );
      setDataGenres(
        movieData.data.genres.map(genre => (
          <span key={genre.id}>{`- ${genre.name} -`}</span>
        ))
      );
      setDataRelease(movieData.data.release_date.slice(0, 7));
    });
  }, [movieId]);

  return (
    <main>
      <BackLink to={BackLinkHref}>Go back</BackLink>
      <MovieInfo
        dataMovie={dataMovie}
        imageSrc={imageSrc}
        dataGenres={dataGenres}
        dataRelease={dataRelease}
      />

      <Suspense fallback={<div>Loading...</div>}>
        <p>Additional info:</p>
        <ul>
          <li>
            <Link to="cast" datarelease={dataRelease}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
