const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'goodreads'
});

//FILL IN IF YOU WILL PROCEED WITH MYSQL; NEED RETRIEVE FUNCTIONALITY

const retrieve = (id, callback) => {
  connection.connect((err) => {
    if (err) throw err;
    connection.query(`SELECT * FROM books where id = ${id}`, (err, result) => {
      if (err) throw err;
      console.log(result[0]);
      callback(result[0]);
    });
  });
}

module.exports = {
  retrieve
}