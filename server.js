
const express = require('express');
const app = express();

const server = app.listen(7000, () => {
    console.log(`Express running, Server port No.7000`);
  });

  app.set('view engine', 'pug');

  app.get('/', (req, res) => {
    res.render('index');
  });