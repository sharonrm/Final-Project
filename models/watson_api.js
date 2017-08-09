ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

// let emailStuff = "I have no concern about it whatsoever, Greenblatt said at a Television Critics Association event. Jimmy’s the greatest at what he does. He’s the most multitalented entertainer for late night. Clearly we’re in a news cycle that everyday tops itself from the day before. I think that will even itself out."
// The following code came directly from the Watson API docs:
function getWatsonTone(req, res){

  var tone_analyzer = new ToneAnalyzerV3({
      username: process.env.SERVICE_NAME_USERNAME,
      password: process.env.SERVICE_NAME_PASSWORD,
      version_date: '2016-05-19'
  });

  var params = {
      // Get the text from the JSON file.
      text: req.body.contentValue,
      tones: 'emotion'
  };

  return tone_analyzer.tone(params, (error, response) => {

      if (error) console.log('error:', error);
      
      //this is sending the response as an object back to front end
      res.json({ response });
  });

}

module.exports = getWatsonTone;