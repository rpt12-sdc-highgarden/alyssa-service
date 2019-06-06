/*
*   schema.sql needs to be executed before seeding the database/running this file.
 *  Additional instructions are in the file.
*/
const fake = require('faker');
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    database : 'goodreads'
  }
});

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const createBooks = (bookId) => {
  const newBooks = [];
  for (let i = 0; i < 10000; i += 1) {
    let book = {};
    book.id = i + bookId;
    book.title = fake.random.words(3);
    book.author = fake.name.findName();
    book.description = fake.lorem.paragraphs();
    book.oneStar = fake.random.number();
    book.twoStar = fake.random.number();
    book.threeStar = fake.random.number();
    book.fourStar = fake.random.number();
    book.fiveStar = fake.random.number();
    book.reviews = fake.random.number();
    book.kindleLink = fake.internet.url();
    book.amazonLink = fake.internet.url();
    //store links
    book.audibleLink = fake.internet.url();
    book.barnesAndNobleLink = fake.internet.url();
    book.walmartLink = fake.internet.url();
    book.appleLink = fake.internet.url();
    book.googleLink = fake.internet.url();
    book.abebooksLink = fake.internet.url();
    book.bookDepositoryLink = fake.internet.url();
    book.indigoLink = fake.internet.url();
    book.alibrisLink = fake.internet.url();
    book.betterWorldBooksLink = fake.internet.url();
    book.indieBoundLink = fake.internet.url();

    book.type = fake.random.word();
    book.pages = fake.random.number({ max: 3000 });
    book.publishDate = fake.date.past();
    book.publisher = fake.company.companyName();
    //metadata
    book.originalTitle = book.title;
    book.ISBN = fake.random.number();
    book.ISBN13 = fake.random.number();
    book.language = 'English';

    book.imageURL = `https://s3-us-west-2.amazonaws.com/sdc-goodreads/book-images/${getRandomNumber(201)}.jpg`;

    newBooks.push(book);
  }
  return newBooks;
}

const seed = async () => {
  var id = 0;
  var chunkSize = 1000;
  console.log(`Seeding started on ${Date()}`);
  for (var i = 0; i < 1000; i++) {
    var newBooks = createBooks(id);
    await knex.batchInsert('books', newBooks, chunkSize)
    .catch((error) => { throw error });
    id += 10000;
    if (i % 100 === 0) {
      console.log(`Seeded ${i/100}M records`);
    }
  }
  console.log(`Seeded ${i/100}M records. Completed on ${Date()}`);
  process.exit(0);
}

seed();