require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const parrotApi = require('./parrot');
const compression = require('compression');
const app = express();
const exphbs = require('express-handlebars');
const requestLib = require('request');

app.use( bodyParser.json({limit: '50mb'}) );
app.use( bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 50000
}) );
app.use(cookieParser());
app.use(compression());
//app.use('/images', express.static(__dirname + '/images'));

app.use('/api', parrotApi);

app.use('/src', express.static(__dirname + '/src'));
app.use('/bower_components', express.static(__dirname + '/bower_componenets'));
app.use('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

var server = app.listen(5050, () => {
  console.log('Express listening at http://localhost:5050');
});
