const animal = require('express').Router();

animal.get('/animal', (_, res) => {
  res.json({
    status : "success",
    message : "Get animal successful!"
  })
});

animal.post('/animal', (_, res) => {
  res.json({
    status : "success",
    message : "Post animal successful!"
  })
});

animal.put('/animal', (_, res) => {
  res.json({
    status : "success",
    message : "Put animal successful!"
  })
});

animal.delete('/animal', (_, res) => {
  res.json({
    status : "success",
    message : "Delete animal successful!"
  })
});

module.exports = animal;