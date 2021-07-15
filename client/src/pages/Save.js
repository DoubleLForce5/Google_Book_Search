import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Container from "../components/Container ";

function Save() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    API.getSavedBook()
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  };

  return (
    <Container>
      {books.map((book, i) => 
      <div key={i}>
        {book.title}
      </div>
    )}

    </Container>

  )

}

export default Save;