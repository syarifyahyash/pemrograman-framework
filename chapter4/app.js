const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/', routes);

app.listen(3000, (req, res) =>{
  console.log('Server berjalan pada localhost port 3000');
});

