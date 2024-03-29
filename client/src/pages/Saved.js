import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Container from "../components/Container ";
import SavedCard from "../components/SavedCard";

function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getSavedBook()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  const deleteBook = (id) => {
    API.deleteBook(id)
    .then(res => loadBooks())
    .catch(err => console.log(err)) 
  };

  return (
    <Container>
      {books.map(({ _id, title, authors, description, image, link }) => {
        return (
          <SavedCard
            key={_id}
            title={title}
            author={authors}
            description={description}
            thumbnail={image}
            link={link}
            onDelete={() => {
              deleteBook(_id);
            }}
          />
        );
      })}
    </Container>
  );
}

export default Saved;
