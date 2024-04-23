const country = require('express').Router();

country.get('/country', (_, res) => {
  res.json({
    status : "success",
    message : "Get country successful!"
  })
});

country.post('/country', (_, res) => {
  res.json({
    status : "success",
    message : "Post country successful!"
  })
});

country.put('/country', (_, res) => {
  res.json({
    status : "success",
    message : "Put country successful!"
  })
});

country.delete('/country', (_, res) => {
  res.json({
    status : "success",
    message : "Delete country successful!"
  })
});

module.exports = country;