import { Wrapper, Input, Icon, Button } from './SearchBox.styled';
// import searchQueryMovie from '../../services/searchQueryMovie';
// import { useState } from 'react';

export const SearchBox = ({ value, onChange }) => {
  // const [page, setPage] = useState(1);
  // const [searchMovieData, setSearchMovieData] = useState({});
  // const searchMovie = () =>
  //   searchQueryMovie({ query: value, page }).then(response => {
  //     console.log('response.data', response.data);
  //     setSearchMovieData(response.data);
  //     return response;
  //   });

  return (
    <Wrapper>
      <Input
        type="text"
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
      <Button
        type="button"
        // onClick={() => {
        //   if (value !== '') {
        //     setPage(page + 1);
        //     console.log('page', page);
        //     searchMovie();
        //     return;
        //   }
        //   alert('Enter movie name!');
        // }}
      >
        <Icon />
      </Button>
    </Wrapper>
  );
};
