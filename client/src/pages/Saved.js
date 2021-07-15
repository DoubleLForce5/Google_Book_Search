import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Container from "../components/Container ";

function Saved() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    API.getSavedBook()
      .then((res) => console.log(res.data))
      .catch(err => console.log(err));
  };

  return (
    <Container>
<div>
  save
</div>
    </Container>

  )

}

export default Saved;