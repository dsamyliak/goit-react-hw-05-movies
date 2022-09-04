// import searchQueryMovie from '../../services/searchQueryMovie';
import { useSearchParams, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { SearchBox } from 'components/SearchBox/SearchBox';
// import { MoviesList } from '../../components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieQuery = searchParams.get('query') ?? '';

  // const visibleProducts = products.filter(product =>
  //   product.name.toLowerCase().includes(productName.toLowerCase())
  // );

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      <SearchBox value={movieQuery} onChange={updateQueryString} />
      {/* <MoviesList movies={visibleProducts} /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Movies;
