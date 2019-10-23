
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favorites').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('favorites').insert([
        {user_id: 1, article_id: 21323663},
        {user_id: 2, article_id: 21323663},
        {user_id: 1, article_id: 21324768},
        {user_id: 2, article_id: 21324768},
      ]);
    });
};
