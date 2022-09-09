import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import searchQueryMovie from '../../services/searchQueryMovie';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query') ?? '';

  const [searchResult, setSearchResult] = useState('');

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const searchMovieOnClick = () => {
    if (inputValue === '') {
      alert('Enter movie name');
      return;
    }
    updateQueryString(inputValue);
    setInputValue('');
  };

  useEffect(() => {
    if (movieQuery !== '') {
      searchQueryMovie({ query: movieQuery, page: 1 }).then(dbMovies => {
        setSearchResult(dbMovies.data.results);
      });
    }
    setSearchResult('');
  }, [movieQuery]);

  return (
    <main>
      <SearchBox
        value={inputValue}
        onChange={setInputValue}
        onClick={searchMovieOnClick}
      />

      <Suspense fallback={<div>Loading...</div>}>
        {searchResult !== '' ? (
          <MoviesList movies={searchResult} />
        ) : (
          <div>No movies... Try to find something</div>
        )}

        <Outlet />
      </Suspense>
    </main>
  );
};

export default Movies;
