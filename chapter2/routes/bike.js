const bike = require('express').Router();

bike.get('/bike', (_, res) => {
  res.json({
    status : "success",
    message : "Get bike successful!"
  })
});

bike.post('/bike', (_, res) => {
  res.json({
    status : "success",
    message : "Post bike successful!"
  })
});

bike.put('/bike', (_, res) => {
  res.json({
    status : "success",
    message : "Put bike successful!"
  })
});

bike.delete('/bike', (_, res) => {
  res.json({
    status : "success",
    message : "Delete bike successful!"
  })
});

module.exports = bike;