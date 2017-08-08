// 'use strict';
console.log('runnin!!')

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


let emailStuff = "How many of us can say we wore our wedding dress, after our wedding? Creating deliberate pieces that work harmoniously with the fluctuations your wardrobe has to deal with is the type of slow fashion we believe in."
// The following code came directly from the Watson API docs:
const getWatsonTone = (inputEmail) => {
    var tone_analyzer = new ToneAnalyzerV3({
    username: process.env.SERVICE_NAME_USERNAME,
    password: process.env.SERVICE_NAME_PASSWORD,
    version_date: '2016-05-19'
  });

  var params = {
    // Get the text from the JSON file.
    text: inputEmail,
    tones: 'emotion'
  };

  tone_analyzer.tone(params, function(error, response) {
    if (error) {
      console.log('error:', error);
    } else {
      console.log('!!!!!!')
      console.log(JSON.stringify(response, null, 2));
    }
    }
  );
}

getWatsonTone(emailStuff);


// For local development, specify the username and password or set env properties
// const ltAuthService = new watson.AuthorizationV1({
//   username: process.env.SERVICE_NAME_USERNAME || 'efb6eaff-4a08-4e24-b5b1-9eb6e3da9fd8',
//   password: process.env.SERVICE_NAME_PASSWORD || 'oP5YW0t5iYcG',
//   url: watson.ToneAnalyzerV3.URL
// });

// app.get('/api/token/tone_analyzer', function(req, res) {
//   ltAuthService.getToken(function(err, token) {
//     if (err) {
//       console.log('Error retrieving token: ', err);
//       return res.status(500).send('Error retrieving token');
//     }
//     res.send(token);
//   });
// });
     

// axios({
//   method: 'post',
//   url: 'https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=2016-05-19&sentences=false',
//   headers: {
//     "Content-Type": "application/json",
//     "Authorization": "Basic MzE3N2U3YzAtMDU2Yi00YzExLThiYjYtNzgxNGJiNzAwNmRkOldiNTNKRlFYV052Zg=="
//   },
//   data: {
//     "text":"How many of us can say we wore our wedding dress, after our wedding? Creating deliberate pieces that work harmoniously with the fluctuations your wardrobe has to deal with is the type of slow fashion we believe in."
//   }
// }).then((response) => {
//   console.log('!!!!!!!')
//   console.log(response.data)
// }).catch((err) => {
//   console.log(err)
// })
  

// // 4. listen
app.listen(PORT, () => console.log('Server is listening on port: ', PORT));
