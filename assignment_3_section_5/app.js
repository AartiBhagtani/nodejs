const express = require('express');

const path = require('path');

// const rootDir = require('./util/path.js')

app = express(); 

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', (req, res, next) => {
  res.send("The users page");
});

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "main.html"));
  // rootDir
});

app.listen(3000);
