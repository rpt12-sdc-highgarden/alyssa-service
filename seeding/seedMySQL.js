/*
*   schema.sql needs to be executed before seeding the database/running this file.
 *  Additional instructions are in the file.
*/
const fake = require('faker');
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password: '',
    database : 'goodreads'
  }
});

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}

const createBooks = () => {
  const newBooks = [];
  for (let i = 0; i < 10000; i += 1) {
    let bookTitle = fake.random.words(3)
    let book = {
      title: bookTitle,
      author: fake.name.findName(),
      description: fake.lorem.paragraphs(),
      oneStar: fake.random.number(),
      twoStar: fake.random.number(),
      threeStar: fake.random.number(),
      fourStar: fake.random.number(),
      fiveStar: fake.random.number(),

      //store links
      audibleLink: fake.internet.url(),
      barnesAndNobleLink: fake.internet.url(),
      walmartLink: fake.internet.url(),
      appleLink: fake.internet.url(),
      googleLink: fake.internet.url(),
      abebooksLink: fake.internet.url(),
      bookDepositoryLink: fake.internet.url(),
      indigoLink: fake.internet.url(),
      alibrisLink: fake.internet.url(),
      betterWorldBooksLink: fake.internet.url(),
      indieBoundLink: fake.internet.url(),

      type: fake.random.word(),
      pages: fake.random.number({ max: 3000 }),
      publishDate: fake.date.past(),
      publisher: fake.company.companyName(),
      //metadata
      originalTitle: bookTitle,
      ISBN: fake.random.number(),
      ISBN13: fake.random.number(),
      language: 'English',

      imageURL: `https://s3-us-west-2.amazonaws.com/sdc-goodreads/book-images/${getRandomNumber(201)}.jpg`
    };

    if (i % 2 === 0) {
      book.series_name = fake.random.words(2);
      book.series_URL = fake.internet.url();
    } else {
      book.series_name = null;
      book.series_URL = null;
    }

    newBooks.push(book);
  }
  return newBooks;
}

const seed = async () => {
  var chunkSize = 1000;

  try {
    console.log(`Seeding started on ${Date()}`);
    for (var i = 0; i < 1000; i++) {
      var newBooks = createBooks();
      await knex.batchInsert('books', newBooks, chunkSize)

      if (i % 100 === 0) {
        console.log(`Seeded ${i/100}M records`);
      }
    }
    console.log(`Seeded ${i/100}M records. Completed on ${Date()}`);
    process.exit(0);
  } catch (error) {
    console.error('CATCH ERROR', error);
  }
}

seed();