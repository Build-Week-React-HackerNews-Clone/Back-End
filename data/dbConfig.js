const knex = require('knex');
const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('../knexfile.js');
const knexObj = knexConfig[environment];

module.exports = knex(knexObj);

// const knex = require('knex');

// const knexConfig = require('../knexfile.js');

// module.exports = knex(knexConfig.development);