import { Link, useLocation } from 'react-router-dom';
import { Container, CardWrapper, MovieName } from './MoviesList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      {movies.map(movie => (
        <CardWrapper key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <MovieName>{movie.name}</MovieName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
