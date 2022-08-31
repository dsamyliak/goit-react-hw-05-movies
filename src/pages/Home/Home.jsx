import { useState, useEffect } from 'react';
import getTrendingMovies from '../api';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  //DidMount
  useEffect(() => {
    getTrendingMovies().then(dbData => {
      console.log(dbData.data.results);
      setTrendingMovies(dbData.data.results);
    });
  }, []);

  const location = useLocation();

  // //DidUpdate
  // useEffect(() => {
  //   console.log(trendingMovies);
  // }, [trendingMovies]);

  return (
    <main>
      <h1>Popular movies list</h1>
      <ul>
        {trendingMovies.map(trendingMovie => (
          <li key={trendingMovie.id}>
            <Link to="/movies/:movieId" state={{ from: location }}>
              {trendingMovie.title}
            </Link>
          </li>
        ))}
        {/* <li>{trendingMovies.results[0].title}</li> */}
      </ul>
      {/* <img src="https://via.placeholder.com/960x240" alt="" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
        laboriosam placeat incidunt rem illum animi nemo quibusdam quia
        voluptatum voluptate.
      </p> */}
      {/* <Link to="/home/mycomponent">MyComponent</Link> */}
    </main>
  );
};

export default Home;
