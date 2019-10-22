// Update with your config settings.

// const productionConnection =
//   process.env.DATABASE_URL || "postgres://localhost/postgres";

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/dbHacker.db3"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },
  production: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/dbHacker.db3"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
  // production: {
  //   client: "pg",
  //   connection: productionConnection,
  //   pool: {
  //     min: 2,
  //     max: 100
  //   },

  //   migrations: {
  //     directory: "./data/migrations",
  //     tableName: "knex_migrations"
  //   },
  //   seeds: {
  //     directory: "./data/seeds"
  //   }
  // }
};
