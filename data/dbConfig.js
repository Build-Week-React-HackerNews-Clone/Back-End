// const knex = require('knex');
// const environment = process.env.NODE_ENV || 'development';



// const knexConfig = require('../knexfile.js');


// module.exports = knex(knexConfig.development)[environment];

const knex = require('knex');

const knexConfig = require('../knexfile.js');

module.exports = knex(knexConfig.development);