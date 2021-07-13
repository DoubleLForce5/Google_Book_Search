import axios from 'axios';

export default {
  getBooks: function (bookSearch) {
    return axios(`/api/books/${bookSearch}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
};