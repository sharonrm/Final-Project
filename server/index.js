// 'use strict';
// console.log('runnin!!')

const express = require('express'),
	  expressBrowserify = require('express-browserify'),
	  dotenv = require('dotenv'),
	  watson = require('watson-developer-cloud'),
	  mustacheExpress	= require('mustache-express'),
	  bodyParser = require('body-parser'),
	  cors = require('cors'),
	  app	= express(),
	
	  PORT = process.env.PORT || 8080,
    axios = require('axios'),
    ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

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
app.use('/table', require('./controllers/table-index'))

// // 4. listen
app.listen(PORT, () => console.log('Server is listening on port: ', PORT));
