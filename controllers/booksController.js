const db = require('../models/books');

module.exports = {
  findAll: function(req, res)
  {
    db.Books
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    findById: function(req, res) {
      db.Books
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function( req, res) {
      db.Books
        .findOneAndUpdate({ _id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
      db.Book
        .findById({ _id: req.params.id})
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err=> res.status(422).json(err));

    }

  
  
}

// Search (API)

// search an individual book on Google API (id)
// put/updating as a saved item (DB)


// Saved 
//  find all in mongo DB
// search an individual book on Google API (id)
// remove a single book from DB(ID)