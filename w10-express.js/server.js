const express = require('express');
const app = express();
const ejs = require('ejs');

// app.use('view-engine', 'ejs');
app.set('view engine', 'ejs');

app.listen(5000, () => {
  console.log('Example app listening on port 5000!');
});

app.use(express.static('publicForStaticPages'));

app.get('/profile/:x', (req, res) => {
  console.log(req.query);
  res.render('profile.ejs',
    {
      name: req.params.x
    });
});


app.delete('/deleteAUser', (req, res) => {
  res.send('Delete a user');
});
