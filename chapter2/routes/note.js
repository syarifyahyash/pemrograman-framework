const note = require('express').Router();

note.get('/note', (_, res) => {
  res.json({
    status : "success",
    message : "Get note successful!"
  })
});

note.post('/note', (_, res) => {
  res.json({
    status : "success",
    message : "Post note successful!"
  })
});

note.put('/note', (_, res) => {
  res.json({
    status : "success",
    message : "Put note successful!"
  })
});

note.delete('/note', (_, res) => {
  res.json({
    status : "success",
    message : "Delete note successful!"
  })
});

module.exports = note;