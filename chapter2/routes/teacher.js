const teacher = require('express').Router();

teacher.get('/teacher', (_, res) => {
  res.json({
    status : "success",
    message : "Get teacher successful!"
  })
});

teacher.post('/teacher', (_, res) => {
  res.json({
    status : "success",
    message : "Post teacher successful!"
  })
});

teacher.put('/teacher', (_, res) => {
  res.json({
    status : "success",
    message : "Put teacher successful!"
  })
});

teacher.delete('/teacher', (_, res) => {
  res.json({
    status : "success",
    message : "Delete teacher successful!"
  })
});

module.exports = teacher;