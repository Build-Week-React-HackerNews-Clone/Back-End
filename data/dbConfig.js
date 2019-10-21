const knex = require('knex');
const defaults = require('./defaults.js');

const environment = defaults.environment;

const knexConfig = require('../knexfile.js')[environment];

module.exports = knex(knexConfig.development);