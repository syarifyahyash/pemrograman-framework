const express = require('express');
const app = express();
const user = require('./controllers/user.js');

app.use(express.json());

app.get('/halo', (req, res) => {
  res.json({
    "status" : "success",
    "message" : "Welcome to the API"
  })
})

app.get('/user', user.getUser);
app.post('/user', user.createUser);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 on port 3000');
})