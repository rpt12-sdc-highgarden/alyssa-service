const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'books'
});

connection.connect( (err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

//FILL IN IF YOU WILL PROCEED WITH MYSQL; NEED RETRIEVE FUNCTIONALITY