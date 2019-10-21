const knex = require('knex');
const secrets = require('./defaults.js');

const knexConfig = require('../knexfile.js')[secrets.environment];

module.exports = knex(knexConfig.development);