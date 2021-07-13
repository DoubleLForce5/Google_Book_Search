const router = require('express').Router();
const axios = require('axios');
require('dotenv').config();

router.get('/books/:search', async (req, res) => {
  console.log('HERE INSIDE OF API/books');

  const apiKey = process.env.API_KEY;

  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}&key=${apiKey}`);
    // parse the object here and send that to front end 
    res.json(response.data)
  } catch (error) {
    console.log(error);
  }
})

module.exports = router; 