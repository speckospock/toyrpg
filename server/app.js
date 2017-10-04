const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 5220;

app.get('/', (req, res) => {
  console.log('Hello World');
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

//testing script
