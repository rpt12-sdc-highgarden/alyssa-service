const MongoClient = require('mongodb').MongoClient;
const fake = require('faker');

const url = 'mongodb://localhost:27017/';

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const createBooks = (bookId) => {
  const newBooks = [];
  for (let i = 0; i < 1000; i += 1) {
    let book = {};
    book.id = i + bookId;
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
    book.image = `https://s3-us-west-2.amazonaws.com/sdc-goodreads/book-images/${getRandomNumber(201)}.jpg`;

    if (i % 2 === 0) {
      book.metadata.series = {
        name: fake.random.words(2),
        url: fake.internet.url(),
      };
    }
    newBooks.push(book);
  }
  return newBooks;
}

MongoClient.connect(url, { useNewUrlParser: true}, (err, db) => {
  if (err) throw err;
  console.log('Database created!');
  const dbo = db.db('books');

  dbo.collection('books').drop((err, delOK) => {
    if (err) console.error(err);
    if (delOK) console.log(delOK, ': books collection dropped!');

    dbo.createCollection('books', async (err) => {
      if (err) throw err;
      console.log('Collection created!');
      console.log(`Seeding started on ${Date()}`);

      var id = 0;
      for (var i = 0; i < 10000; i++) {
        var newBooks = createBooks(id);
        await dbo.collection('books').insertMany(newBooks, {
          writeConcern: { w: 0, j: false },
          ordered: false,
          bypassDocumentValidation: true
        });
        id += 1000;
        if (i % 1000 === 0) {
          console.log('ROUND', i);
        }
      }
      console.log(`Seeding ${i} completed on ${Date()}`);
      process.exit(0);
    });
  });
});


