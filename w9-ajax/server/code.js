// write our server using express
const express = require('express');

// create our express app
const app = express();

// add routes
app.get('/', (req, res) => {
  // HTTP GET request 
  // req is the request object
  // res is the response object
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});