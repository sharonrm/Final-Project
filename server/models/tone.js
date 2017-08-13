const db = require('../db/index');

const Tone = {
	findAll: () => {
		return db.one(`SELECT avg(anger) AS anger_avg, avg(disgust) AS disgust_avg, avg(fear) AS fear_avg, avg(joy) AS joy_avg, avg(sadness) AS sadness_avg FROM tones LIMIT 3`)
	},
	findById: (id) => db.one(`SELECT * FROM tones WHERE id = $1`, [id]),
	create: (anger, disgust, fear, joy, sadness) => {
		console.log()
		return db.one(`INSERT INTO tones (anger, disgust, fear, joy, sadness) VALUES ($1, $2, $3, $4, $5) returning id`, [anger, disgust, fear, joy, sadness])
	}
}

module.exports = Tone;