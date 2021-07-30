const router = require('express').Router();
const axios = require('axios');
const booksController = require('../../controllers/booksController');
require('dotenv').config();

router.get('/books/:search', async (req, res) => {
  console.log('HERE INSIDE OF API/books');

  const apiKey = process.env.API_KEY;

  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.search}&key=${apiKey}`);

    res.json(response.data)
  } catch (err) {
    res.status(500).send(err);
  }
})

router.post('/books', booksController.create) 

router.get('/books', booksController.findAll)

router.delete('/books/:id', booksController.remove)
  
module.exports = router; 