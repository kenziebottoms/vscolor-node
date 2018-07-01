'use strict';

const express = require('express');
const app = express();

// static routes
app.use(express.static(__dirname + '/client'));

// auth
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routing
// app.use(require('./server/routes'));

app.listen(3001, () => {
  console.log('server listening on port 3001');
});