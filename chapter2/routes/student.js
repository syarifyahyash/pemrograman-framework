const student = require('express').Router();

student.get('/student', (_, res) => {
  res.json({
    status : "success",
    message : "Get student successful!"
  })
});

student.post('/student', (_, res) => {
  res.json({
    status : "success",
    message : "Post student successful!"
  })
});

student.put('/student', (_, res) => {
  res.json({
    status : "success",
    message : "Put student successful!"
  })
});

student.delete('/student', (_, res) => {
  res.json({
    status : "success",
    message : "Delete student successful!"
  })
});

module.exports = student;