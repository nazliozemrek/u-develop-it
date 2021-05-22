const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3002;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const db  = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'kaanbootcamp94',
        database: 'election'
    },
    console.log('connected to the election database.')
);
db.query(`SELECT * FROM candidates`,(err,rows)  => {
    console.log(rows);
});

app.get('/', (req, res) => {
    res.json({
      message: 'Hello World'
    });
  });
  app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });