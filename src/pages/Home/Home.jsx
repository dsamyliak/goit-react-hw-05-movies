import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import getTrendingMovies from '../../services/getTrendingMovies';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(dbData => {
      setTrendingMovies(dbData.data.results);
    });
  }, []);

  return (
    <main>
      <h1>Trending today:</h1>
      <ul>
        {trendingMovies.map(trendingMovie => (
          <li key={trendingMovie.id}>
            <Link to={`/movies/${trendingMovie.id}`} state={{ from: location }}>
              {trendingMovie.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
