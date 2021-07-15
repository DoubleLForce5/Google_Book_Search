import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import API from "../utils/API";
import Card from "../components/Card";
import Container from "../components/Container ";

function Search() {
  const [bookSearch, setBookSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setBookSearch(event.target.value);
  };

  const saveBook = (book) => {
    API.saveBook(book).then((res) => {
      console.log(res);
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("Hi this is the handleFormSubmit");
    API.getBooks(bookSearch)
      .then((res) => {
        setSearchResults(res.data.items);
      })
      .catch((err) => console.log(err));
  };

  console.log(searchResults)
  return (
    <>
      <SearchBar
        handleFormSubmit={handleFormSubmit}
        onChange={handleInputChange}
        value={bookSearch}
        // save to mongo and then return to new prop to hold results
      />
      <Container>
        {searchResults.map(
          ({
            id,
            volumeInfo: {
              title,
              authors,
              description,
              infoLink,
              imageLinks: { thumbnail },
            },
          }) => {
            return (
              <Card
                key={id}
                title={title}
                author={authors}
                description={description}
                thumbnail={thumbnail}
                link={infoLink}
                onSave={() => {
                  saveBook({ title, authors, description, image: thumbnail, link: infoLink });
                }}
              />
            );
          }
        )}
      </Container>
    </>
  );
}

export default Search;
