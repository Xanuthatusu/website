const express = require('express');
const cors = require('cors');
const router = express.Router();
const mustache = require('mustache');
const querystring = require('querystring');
const request = require('superagent');
const bwipjs = require('bwip-js');

router.get('/test', (req, res) => {
  res.statusCode = 200;
  res.write('You\'ve just hit my test endpoint!');
  res.send();
})

module.exports = router;
