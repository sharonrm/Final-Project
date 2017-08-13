const router = require('express').Router(),
	  Tone = require('../models/tone')

	  router.post('/', (req, res)=> {
	  	// console.log('POSTING TO TABLE', req.body);
	  	const saved = req.body
	  	const {score} = req.body;
	  
	  //...b/c we are passing an array this changes it to pass it as individual parameters
	  //destructuring - arrays and object
	  	Tone.create(...req.body)
	  		.then((data) => {
	  			res.json(data);
	  		})
	  		.catch(err => console.log("CONTROLLER Post to table err: ", err));
	  });

	  router.get('/', (req, res) => {
	  	Tone.findAll()
	  		   .then((data) => {
	  		   	res.json(data);
	  		   	console.log("this is going to the front----", data)
	  		   }) 
	  		   .catch(err=> console.log(err));

	  })

module.exports = router;
