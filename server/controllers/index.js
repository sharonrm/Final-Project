const router = require('express').Router(),
	  Tone = require('../models/tone'),
	  getWatsonTone = require('../models/watson_api');


router.post('/', getWatsonTone);


	  router.get('/', (req, res) => {
	  	Tone.findAll()
	  		.then((data)=> {
	  			res.json(data)
	  		})
	  		.catch(err => console.log('CONTROLLER get error: ', err));
	  })



	  module.exports = router;