import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import API from '../utils/API';

function Search() {

  const [bookSearch, setBookSearch] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const handleInputChange = event => {
    setBookSearch(event.target.value)
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log('Hi this is the handleFormSubmit')
    API.getBooks(bookSearch)
      .then(res => {setSearchResults(res.data)})
      .catch(err => console.log(err))
  }

  return (
    <SearchBar 
      handleFormSubmit={handleFormSubmit}
      onChange={handleInputChange}
      value={bookSearch}
      // save to mongo and then return to new prop to hold results 
    />
  )
}

export default Search; 

