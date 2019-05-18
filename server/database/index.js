const mongoose = require('mongoose');
const fake = require('faker');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/books', { useNewUrlParser: true });

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
    worldcat: String,
  },
  type: String,
  pages: Number,
  publishDate: Date,
  publisher: String,
  metadata: {
    originalTitle: String,
    isbn: Number,
    isbn13: Number,
    asin: String,
    language: String,
    series: {
      name: String,
      url: String,
    },
  },
});

const Book = mongoose.model('Book', bookSchema);

const seed = (Model, callback) => {
  // clean out current database, if any test records clogging up
  Model.deleteMany({}, async () => {
    let book;
    const queries = [];
    for (let i = 0; i < 100; i += 1) {
      book = new Model();

      // initiate a bunch of new book info
      book.id = i;
      book.title = fake.random.words(3);
      book.author = fake.name.findName();
      book.description = fake.lorem.paragraphs();
      book.ratings = {
        five: fake.random.number(),
        four: fake.random.number(),
        three: fake.random.number(),
        two: fake.random.number(),
        one: fake.random.number(),
      };
      book.reviews = fake.random.number();
      book.links = {
        kindle: fake.internet.url(),
        amazon: fake.internet.url(),
        stores: {
          audible: fake.internet.url(),
          barnesAndNoble: fake.internet.url(),
          walmart: fake.internet.url(),
          apple: fake.internet.url(),
          google: fake.internet.url(),
          abebooks: fake.internet.url(),
          bookDesository: fake.internet.url(),
          indigo: fake.internet.url(),
          alibris: fake.internet.url(),
          betterWorldBooks: fake.internet.url(),
          indieBound: fake.internet.url(),
        },
      };
      book.type = fake.random.word();
      book.pages = fake.random.number({ max: 3000 });
      book.publishDate = fake.date.past();
      book.publisher = fake.company.companyName();
      book.metadata = {
        originalTitle: book.title,
        isbn: fake.random.number(),
        isbn13: fake.random.number(),
        language: 'English',
      };
      book.image = 'http://lorempixel.com/480/640/abstract/';

      if (i % 2 === 0) {
        book.series = {
          name: fake.random.words(2),
          url: fake.internet.url(),
        };
      }

      queries.push(book.save());
    }
    await Promise.all(queries);
    callback();
  });
};

const retrieve = (id, callback) => {
  Book.findOne({ id }, (err, doc) => {
    // console.log('doc is', doc);
    callback(err, doc);
  });
};

//This function is not being used anywhere. This is just to create a new book example for Postman testing.
const createBook = () => {
  var newBook = {}
  // newBook.id = i;
  newBook.title = fake.random.words(3);
  newBook.author = fake.name.findName();
  newBook.description = fake.lorem.paragraphs();
  newBook.ratings = {
    five: fake.random.number(),
    four: fake.random.number(),
    three: fake.random.number(),
    two: fake.random.number(),
    one: fake.random.number(),
  };
  newBook.reviews = fake.random.number();
  newBook.links = {
    kindle: fake.internet.url(),
    amazon: fake.internet.url(),
    stores: {
      audible: fake.internet.url(),
      barnesAndNoble: fake.internet.url(),
      walmart: fake.internet.url(),
      apple: fake.internet.url(),
      google: fake.internet.url(),
      abebooks: fake.internet.url(),
      bookDesository: fake.internet.url(),
      indigo: fake.internet.url(),
      alibris: fake.internet.url(),
      betterWorldBooks: fake.internet.url(),
      indieBound: fake.internet.url(),
    },
  };
  newBook.type = fake.random.word();
  newBook.pages = fake.random.number({ max: 3000 });
  newBook.publishDate = fake.date.past();
  newBook.publisher = fake.company.companyName();
  newBook.metadata = {
    originalTitle: newBook.title,
    isbn: fake.random.number(),
    isbn13: fake.random.number(),
    language: 'English',
  };
  newBook.image = 'http://lorempixel.com/480/640/abstract/';

  return newBook;
}
//JSON example of a new book
// {
// 	"id": 200,
// 	"title": "FTP Awesome Fresh Salad AGP",
//   "author": "Mr. Burdette Barton",
//   "description":
//    "Quo voluptate voluptate. Ipsam omnis dolorem ut sequi velit blanditiis voluptatem. A est sint. Et neque impedit suscipit et dolor. Modi quas non asperiores tenetur. Odio quam quia fuga culpa.\n \rAut sit reprehenderit. Sed dignissimos consequatur hic error. Molestias aperiam ut praesentium dolor ex.\n \rPraesentium minus occaecati dolores. Quaerat omnis occaecati tenetur et voluptates. Amet quia minima molestiae provident quaerat. Fugit ullam sed earum vel quod aut nulla. Officiis sed quo enim animi qui necessitatibus.",
//   "ratings":
//    { "five": 52432, "four": 10146, "three": 7822, "two": 5583, "one": 65619 },
//   "reviews": 23220,
//   "links":
//    { "kindle": "https://carolanne.net",
//      "amazon": "https://gia.org",
//      "stores":
//       { "audible": "http://henderson.org",
//         "barnesAndNoble": "https://jacinto.com",
//         "walmart": "https://river.com",
//         "apple": "http://estelle.org",
//         "google": "https://jaylon.name",
//         "abebooks": "http://elmore.info",
//         "bookDesository": "http://omer.name",
//         "indigo": "https://imelda.org",
//         "alibris": "https://emily.name",
//         "betterWorldBooks": "https://alaina.name",
//         "indieBound": "http://lucienne.name" } },
//   "type": "Developer",
//   "pages": 1640,
//   "publishDate": 2019-01-09T00:50:14.374Z,
//   "publisher": "Morissette, Cummerata and Larkin",
//   "metadata":
//    { "originalTitle": "FTP Awesome Fresh Salad AGP",
//      "isbn": 96556,
//      "isbn13": 50300,
//      "language": "English" },
//   "image": "http://lorempixel.com/480/640/abstract/" }

module.exports = {
  bookSchema,
  seed,
  Book,
  retrieve,
  createBook
};
