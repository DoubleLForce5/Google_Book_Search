import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import API from '../utils/API';
import Card from '../components/Card'
import Container from '../components/Container ';

function Search() {

  const [bookSearch, setBookSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = event => {
    setBookSearch(event.target.value)
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log('Hi this is the handleFormSubmit')
    API.getBooks(bookSearch)
      .then(res => {setSearchResults(res.data.items)})
      .catch(err => console.log(err))
  }

  return (
    <>
    <SearchBar 
      handleFormSubmit={handleFormSubmit}
      onChange={handleInputChange}
      value={bookSearch}
      // save to mongo and then return to new prop to hold results 
    />
    <Container>
    {searchResults.map( result => {
      return (
        <Card 
        key={result.id}
        title={result.volumeInfo.title}
        author={result.volumeInfo.authors}
        description={result.volumeInfo.description}
        thumbnail={result.volumeInfo.imageLinks.thumbnail}
        />
      )
    })}

    </Container>
    </>
  )
}

export default Search; 

