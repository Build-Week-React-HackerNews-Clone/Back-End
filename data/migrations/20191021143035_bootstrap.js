exports.up = function(knex) {
    return knex.schema
  
      .createTable("topArticles", articles => {
        articles.increments("id");
  
        articles.integer("article_id").notNullable();
  
        articles.string("title").notNullable();
  
        articles.string("url").notNullable();
        articles.timestamp("time").notNullable();
      })
  
      .createTable("articleHistory", articles => {
        articles.increments("id");
  
        articles.integer("article_id").notNullable();

        articles.timestamp("time").notNullable();
  
        articles.string("title").notNullable();
  
        articles.string("url").notNullable();
      })
  
      .createTable("users", users => {
        users.increments("id");
  
        users
          .string("username", 128)
          .notNullable()
          .unique();
  
        users.string("password", 128).notNullable();
  
        users
          .string("email", 128)
          .notNullable()
          .unique();
      })
      .createTable("favorites", favorites => {
        favorites.increments("id");
        favorites
          .integer("user_id")
          .unsigned()
          .notNullable()
          .references("id")
          .inTable("users")
          .onUpdate("CASCADE")
          .onDelete("RESTRICT");
  
        favorites
          .integer("article_id")
          .unsigned()
          .notNullable()
          .references("article_id")
          .inTable("articleHistory")
          .onUpdate("CASCADE")
          .onDelete("RESTRICT");
        favorites.unique(["user_id", "article_id"]);
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists("topArticles")
      .dropTableIfExists("articleHistory")
      .dropTableIfExists("users")
      .dropTableIfExists("favorites");
  };