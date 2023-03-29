const express = require('express')
const app = express()
const mongoose = require('mongoose');


function main() {
  mongoose.connect('mongodb://localhost:27017/test');

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

main()

const { Schema } = mongoose;

const unicornSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  weight: Number,
  loves: [String]
});

const x = mongoose.model('unicorns', unicornSchema); // unicorns is the name of the collection in db

const aUnicornModel = new x();

app.get("/", async (req, res) => {
  const result2 = await x.deleteMany({ name: "test3" });
  
  const result = await x.find({ name: "test3" });
  res.send(result)
})



app.listen(3000, () => {
  console.log("Server is running on port 3000")
})