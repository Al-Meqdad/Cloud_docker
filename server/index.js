const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const PORT = 5050;
app.use(cors());

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'database',
  port: 3306,
  user: 'myuser',
  password: 'mypassword',
  database: 'myapp'
});

app.get('/getUrgentNews', (req, res) => {
  // Use the MySQL connection pool to execute a query
  pool.query('SELECT * FROM news', (error, results) => {
    if (error) {
      console.error('Error querying MySQL database:', error);
      res.status(500).send('Error querying MySQL database');
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});