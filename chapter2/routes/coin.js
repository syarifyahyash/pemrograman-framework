const coin = require('express').Router();

coin.get('/coin', (_, res) => {
  res.json({
    status : "success",
    message : "Get coin successful!"
  })
});

coin.post('/coin', (_, res) => {
  res.json({
    status : "success",
    message : "Post coin successful!"
  })
});

coin.put('/coin', (_, res) => {
  res.json({
    status : "success",
    message : "Put coin successful!"
  })
});

coin.delete('/coin', (_, res) => {
  res.json({
    status : "success",
    message : "Delete coin successful!"
  })
});

module.exports = coin;