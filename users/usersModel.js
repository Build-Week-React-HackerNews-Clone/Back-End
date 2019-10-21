const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('users').select('id', 'username');
}

function findBy(filter) {
  return db('users').where(filter);
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findById(id) {
  return db('users')
    .select('id', 'username')
    .where({ id })
    .first();
}

async function updateById(id, user) {
  await db("users")
    .where({ id: id })
    .update(user);
  return findById(id);
}

async function updateById(id, user) {
    await db("users")
      .where({ id: id })
      .update(user);
    return findById(id);
  }