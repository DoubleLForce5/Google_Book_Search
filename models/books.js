const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: [String],
    required: true
  },
  description: {
    type: String,
  },
  image: {
    type: String, 
    default: ""
  },
  link: {
    type: String, 
    default: ""
  }
});

const Books = mongoose.model('Books', booksSchema);

module.exports = Books; 