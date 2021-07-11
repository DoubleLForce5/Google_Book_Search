const router = require('express').Router();
const axios = require('axios');
require('dotenv').config();
// const booksController = require('../../controllers/booksController');

router.get('/books', async (req, res) => {
  console.log('HERE INSIDE OF API/books');

  const apiKey = process.env.API_KEY;

  try {
    const response = await axios.post(`https://www.googleapis.com/books/v1/volumes?=HarryPotter&key=${apiKey}`);
    console.log(response.data)
  } catch (error) {
    console.log(error);
  }
})

module.exports = router; 

// Search (API)

// search an individual book on Google API (id)
// put/updating as a saved item (DB)


// Saved 
//  find all in mongo DB
// search an individual book on Google API (id)
// remove a single book from DB(ID)