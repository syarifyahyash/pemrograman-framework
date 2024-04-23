const car = require('express').Router();

car.get('/car', (_, res) => {
  res.json({
    status : "success",
    message : "Get car successful!"
  })
});

car.post('/car', (_, res) => {
  res.json({
    status : "success",
    message : "Post car successful!"
  })
});

car.put('/car', (_, res) => {
  res.json({
    status : "success",
    message : "Put car successful!"
  })
});

car.delete('/car', (_, res) => {
  res.json({
    status : "success",
    message : "Delete car successful!"
  })
});

module.exports = car;