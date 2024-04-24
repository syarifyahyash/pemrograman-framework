const express = require('express');
const mariadb = require('mariadb');

const app = express();
const port = 3000;

app.use(express.json());

const { json } = express.json();

const pool = mariadb.createPool({
  host: 'localhost', 
  user:'root', 
  password: '',
  database: 'test',
  connectionLimit: 5
});

app.get('/', (_req, res) => {
  res.send('Hello Syarif!')
});

app.get('/notes', async (_req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const notes = await conn.query('SELECT * FROM notes');
    res.json({
      "status": "success",
      "message": "Notes retrieved successfully",
      notes
    });
  } catch (err) {
    res.status(500).send(err);
}
});

app.post('/notes', async (req, res) => {
  const { title, body } = req.body;
  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query('INSERT INTO notes (title, body) VALUES (?, ?)', [title, body]);
    res.json({
      "status": "success",
      "message": "Note created successfully",
      "note": {
        title,
        body
      }
    });
  } catch (error) {
    res.status(500).send(error);
  } 
});
  

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
});
