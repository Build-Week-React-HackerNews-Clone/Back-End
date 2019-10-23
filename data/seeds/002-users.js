exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "user1",
          email: "email1@fakemail.com",
          password: "$2a$14$1rGi36vrm7PyXk5D83nDFeXZsZXBcnNplxDRyjSyMDnN6sBOQkXv6"
        },
        {
          username: "user2",
          email: "email2@fakemail.com",
          password: "$2a$14$1rGi36vrm7PyXk5D83nDFeXZsZXBcnNplxDRyjSyMDnN6sBOQkXv6"
        }
      ]);
    });
};
