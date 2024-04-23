require('dotenv').config();
const express = require('express');
const app = express();

const animals = require('./routes/animal.js');
const bikes = require('./routes/bike.js');
const cars = require('./routes/car.js');
const coins = require('./routes/coin.js');
const countries = require('./routes/country.js');
const datas = require('./routes/data.js');
const news = require('./routes/news.js');
const notes = require('./routes/note.js');
const students = require('./routes/student.js');
const teachers = require('./routes/teacher.js');

app.use(express.json());

app.use(animals);
app.use(bikes);
app.use(cars);
app.use(coins);
app.use(countries);
app.use(datas);
app.use(news);
app.use(notes);
app.use(students);
app.use(teachers);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});