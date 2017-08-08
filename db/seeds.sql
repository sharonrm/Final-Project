DROP TABLE IF EXIST tones;

CREATE TABLE tones(
id SERIAL PRIMARY KEY,
score DECIMAL,
tone_name VARCHAR,
);

INSERT INTO tones (score, tone_name) VALUES
(
	0.251984,
	 'Anger'
),
(
	0.063382,
	'Disgust'
),
( 
  	0.08432,
  	'Fear'
),
(
	0.44039,
	'Joy'
),
(
	0.276011,
	'Sadness'
),
(
	0.736855,
	'Analytical'	
),
(
	 0.78945,
   'Confident'
),
(
	0,
	'Tentative'
),
(
	0.688681,
	'Openess'
),
(
	0.722389,
	'Conscientiousness'
),
(
	0.893251,
	'Extraversion'
)
(
	0.893251,
	'Agreeableness'
),
(
	0.68995,
	'Emotional Range'
);