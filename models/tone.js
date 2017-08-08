const db = require('../db/index');

const Tone = {
	findAll: () => db.manyOrNone('SELECT * FROM tones'),
	findById: (id) => db.one(`SELECT * FROM tones WHERE id = $1`, [id])
}

module.exports = Tone;