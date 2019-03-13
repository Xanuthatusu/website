const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db')

const app = express();

const port = 8000;

app.use(bodyParser.json({ extended: true }));

const user = encodeURIComponent(db.user);
const password = encodeURIComponent(db.password);
const url = encodeURIComponent(db.url);

MongoClient.connect(`mongodb://${user}:${password}@${url}:27017/blog`, { useNewUrlParser: true }, (err, database) => {
  if (err) return console.log(err);

  database = database.db('blog');
  require('./app/routes')(app, database);

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  })
})

