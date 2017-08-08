'use strict';

const express = require('express'),
	  expressBrowserify = require('express-browserify'),
	  dotenv = require('dotenv'),
	  watson = require('watson-developer-cloud'),
	  mustacheExpress	= require('mustache-express'),
	  bodyParser = require('body-parser'),
	  cors = require('cors'),
	  app	= express(),
	  PORT = process.env.PORT || 8080;

const isDev = app.get('env') === 'development';
app.get(
  '/bundle.js',
  expressBrowserify('public/client.js', {
    watch: isDev,
    debug: isDev
  })
);


// 1. set up the view engines
app.set('view engine', 'html');
app.set('views', __dirname + '/views/');
app.use(express.static(__dirname + '/public/'));

// cross-origin requests will not work from react server to express
// server with out this
app.use(cors());

app.engine('html', mustacheExpress());

// 2. set body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

dotenv.load({ silent: true });

// 3. connect controller
app.use('/api', require('./controllers/index'));

// For local development, specify the username and password or set env properties
const ltAuthService = new watson.AuthorizationV1({
  username: process.env.SERVICE_NAME_USERNAME || 'efb6eaff-4a08-4e24-b5b1-9eb6e3da9fd8',
  password: process.env.SERVICE_NAME_PASSWORD || 'oP5YW0t5iYcG',
  url: watson.ToneAnalyzerV3.URL
});

app.get('/api/token/tone_analyzer', function(req, res) {
  ltAuthService.getToken(function(err, token) {
    if (err) {
      console.log('Error retrieving token: ', err);
      return res.status(500).send('Error retrieving token');
    }
    res.send(token);
  });
});

// 4. listen
app.listen(PORT, () => console.log('Server is listening on port: ', PORT));
