const db = require('../data/dbConfig.js');

module.exports = {
    find,
    // updateByRank
  };

  function find() {
    return db('topArticles');
  }