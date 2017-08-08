const pgp 	= require('pg-promise')();
const db 	= pgp(process.env.DATABASE_URL || 'postgres://sharonmoskal@localhost:5432/tone');  //update YOURNAMEHERE with your name and create a db called "movie 3"

module.exports = db;