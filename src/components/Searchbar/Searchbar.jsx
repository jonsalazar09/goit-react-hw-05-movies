import { useState } from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as SearchIcon } from '../../icons/search-icon.svg';

import {
  Form,
  SearchBtn,
  SearchIconWrap,
  Input,
} from 'components/Searchbar/Searchbar.styled';

const Searchbar = ({ getQuery }) => {
  const [query, setQuery] = useState('');

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const queryValue = form.elements.query.value.toLowerCase().trim();

    getQuery(queryValue);
    setQuery('');
    // form.reset(); //??
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        value={query}
        autoComplete="off"
        autoFocus
        placeholder="Movie name"
        onChange={handleChange}
      />
      <SearchBtn type="submit" aria-label="Search">
        <SearchIconWrap>
          <SearchIcon width="24" height="24" fill="currentColor" />
        </SearchIconWrap>
      </SearchBtn>
    </Form>
  );
};

Searchbar.propTypes = { getQuery: PropTypes.func.isRequired };

export default Searchbar;
