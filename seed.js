const mongo = require('./server/database/index.js');

mongo.seed(mongo.Book, () => {
  console.log(`Seeding completed on ${Date()}`);
  process.exit(0);
});