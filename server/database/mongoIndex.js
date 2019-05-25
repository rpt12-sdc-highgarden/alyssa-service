const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/books', { useNewUrlParser: true, useCreateIndex: true });

const bookSchema = mongoose.Schema({
  id: {
    type: Number,
    index: true,
    unique: true,
  },
  title: String,
  author: String,
  description: String,
  image: String,
  ratings: {
    five: Number,
    four: Number,
    three: Number,
    two: Number,
    one: Number,
  },
  reviews: Number,
  links: {
    kindle: String,
    amazon: String,
    stores: {
      audible: String,
      barnesAndNoble: String,
      walmart: String,
      apple: String,
      google: String,
      abebooks: String,
      bookDesository: String,
      indigo: String,
      alibris: String,
      betterWorldBooks: String,
      indieBound: String,
    },
  },
  type: String,
  pages: Number,
  publishDate: Date,
  publisher: String,
  metadata: {
    originalTitle: String,
    isbn: Number,
    isbn13: Number,
    language: String,
    series: {
      name: String,
      url: String,
    },
  },
});

const Book = mongoose.model('Book', bookSchema);

const retrieve = (id, callback) => {
  Book.findOne({ id }, (err, doc) => {
    if (err) console.error(err);
    callback(err, doc);
  });
};

module.exports = {
  retrieve,
};
