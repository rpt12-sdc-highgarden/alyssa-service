/*  Execute this file from the command line to create the MySQL database and schema by typing:
 *    mysql -u <USER> < schema.sql
 *    OR
 *    mysql -u <USER> -p < schema.sql (if you have a password)
 *  On your personal computer, if you haven't set up
 *  a password, it'll be
 *    mysql -u root < schema.sql
 *
 *  Then to seed the database, run 'npm run seedMySQL.js'
*/

DROP DATABASE IF EXISTS goodreads;

CREATE DATABASE goodreads;

USE goodreads;

CREATE TABLE books (
  id INT NOT NULL,
  title TEXT NOT NULL,
  author TEXT,
  description TEXT,
  oneStar INT,
  twoStar INT,
  threeStar INT,
  fourStar INT,
  fiveStar INT,
  reviews INT,
  kindleLink TEXT,
  amazonLink TEXT,
  audibleLink TEXT,
  barnesAndNobleLink TEXT,
  walmartLink TEXT,
  appleLink  TEXT,
  googleLink TEXT,
  abebooksLink TEXT,
  bookDepositoryLink TEXT,
  indigoLink TEXT,
  alibrisLink TEXT,
  betterWorldBooksLink TEXT,
  indieBoundLink TEXT,
  type TEXT,
  pages SMALLINT,
  publishDate DATE,
  publisher TEXT,
  originalTitle TEXT,
  ISBN INT,
  ISBN13 INT,
  language TEXT,
  imageURL TEXT,
  PRIMARY KEY (id)
);


