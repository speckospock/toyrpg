const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (res, res) => {
  console.log('Hello World');
});
