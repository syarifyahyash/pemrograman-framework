const news = require('express').Router();

news.get('/news', (_, res) => {
  res.json({
    status : "success",
    message : "Get news successful!"
  })
});

news.post('/news', (_, res) => {
  res.json({
    status : "success",
    message : "Post news successful!"
  })
});

news.put('/news', (_, res) => {
  res.json({
    status : "success",
    message : "Put news successful!"
  })
});

news.delete('/news', (_, res) => {
  res.json({
    status : "success",
    message : "Delete news successful!"
  })
});

module.exports = news;