const data = require('express').Router();

data.get('/data', (_, res) => {
  res.json({
    status : "success",
    message : "Get data successful!"
  })
});

data.post('/data', (_, res) => {
  res.json({
    status : "success",
    message : "Post data successful!"
  })
});

data.put('/data', (_, res) => {
  res.json({
    status : "success",
    message : "Put data successful!"
  })
});

data.delete('/data', (_, res) => {
  res.json({
    status : "success",
    message : "Delete data successful!"
  })
});

module.exports = data;