import { useState, useEffect } from 'react';
import getTrendingMovies from '../../services/getTrendingMovies';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  //DidMount
  useEffect(() => {
    getTrendingMovies().then(dbData => {
      setTrendingMovies(dbData.data.results);
    });
  }, []);

  const location = useLocation();

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
