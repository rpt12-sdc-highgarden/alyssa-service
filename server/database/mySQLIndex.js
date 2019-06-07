const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'goodreads'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to database!');
});

const retrieve = (id, callback) => {
  connection.query(`SELECT * FROM books where id = ${id}`, (err, result) => {
    if (err) throw err;
    callback(err, result[0]);
  });
}

const save = (book, callback) => {
  const fields = Object.keys(book);
  let values = '';
  let fieldNames = '';

  fields.forEach(field => {
    values += `"${book[field]}", `;
    fieldNames += `${field}, `;
  });

  values = values.slice(0, -2);
  fieldNames = fieldNames.slice(0, -2);

  connection.query(`INSERT INTO books (${fieldNames}) VALUES (${values})`, (err) => {
    if (err) throw err;
    callback(err);
  });
}

const updateReviewCount = (id, callback) => {
  connection.query(`SELECT reviews FROM books where id = ${id}`, (err, result) => {
    if (err) throw err;
    connection.query(`UPDATE books SET reviews = ${result[0].reviews += 1} WHERE id = ${id}`, (err) => {
      if (err) throw err;
      callback(err);
    });
  });
}

const deleteRecord = (id, callback) => {
  connection.query(`DELETE FROM books WHERE id =${id}`, (err, result) => {
    if (err) throw err;
    callback(err, result);
  });
}

module.exports = {
  retrieve,
  save,
  updateReviewCount,
  deleteRecord
}