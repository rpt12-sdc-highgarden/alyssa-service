require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const book = require('./database/mySQLIndex.js');

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
  book.retrieve(req.params.id, (err, doc) => {
    if (err) res.status(400).send(err);
    res.status(200).send(doc);
  });
});

app.post('/newbook', (req, res) => {
  book.save(req.body, (err) => {
    if (err) res.status(400).send(err);
    res.status(200).send('Saved to db!');
  });
});

app.put('/updatebook/:id', (req, res) => {
  book.updateReviewCount(req.params.id, (err) => {
    if (err) res.status(400).send(err);
    res.status(200).send('Review count updated!');
  });
});

app.delete('/deletebook/:id', (req, res) => {
  book.deleteRecord(req.params.id, (err) => {
    if (err) res.status(400).send(err);
    res.status(200).send('Row deleted!');
  });
});

module.exports = app;
