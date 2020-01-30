const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const beloteParty = require('./routes')
// const form = require('./routes');

app.use('/beloteparty', beloteParty);

app.listen(port, err => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});

