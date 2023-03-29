const express = require('express');
const app = express();
const ejs = require('ejs');

var session = require('express-session')
var FileStore = require('session-file-store')(session);

app.use(session({
  // create a file store for sessions
  store: new FileStore,
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))


const x = 2

app.set('view engine', 'ejs');

const port = 3000;


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


app.get('/', (req, res) => {
  if (req.query?.name)
    req.session.name = req.query.name;
  console.log(req.session);
  res.send('Hello World!');
});





