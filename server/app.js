const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const books = require('./database/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '/../client')));
app.use('/:id', express.static(path.join(__dirname, '/../client')));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/books/:id', (req, res) => {
  books.retrieve(req.params.id, (err, doc) => {
    // add err handling
    res.send(doc);
  });
});

app.post('/newbook', (req, res) => {
  console.log('REQ BODY', req.body);
  var newBook = new books.Book(req.body);
  newBook.save((err) => {
    if (err) console.error(err);
    res.status(200).send('Saved to db!');
  });
});

app.put('/updatebook/:id', (req, res) => {
  console.log('PUT BODY', req.body);
  books.Book.findOne({id: req.params.id}, (err, queriedBook) => {
    if (err) console.error(err);
    queriedBook.reviews = queriedBook.reviews += 1;
    var updateBook = new books.Book(queriedBook);
    updateBook.save((err) => {
      if (err) res.status(400).send(err);
      res.status(200).send(`Added +1 review count for ${queriedBook.title}: ${queriedBook}`);
    });
  });
});

module.exports = app;
