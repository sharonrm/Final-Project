const router = require('express').Router(),
	  Tone = require('../models/tone');

	  router.post('/', (req, res) => {
	  	console.log('from controller' , req.body);
	  	const {score, tone_name} = req.body
	 	Tone.create(score, tone_name)
	  	  .then((data) => {
	  	  	res.json(data);
	  	  })
	  	  .catch(err => console.log('controller post err: ', err));
	 });


	  router.get('/', (req, res) => {
	  	Tone.findAll()
	  		.then((data)=> {
	  			res.json(data)
	  		})
	  		.catch(err => console.log('CONTROLLER get error: ', err));
	  })

	  module.exports = router;