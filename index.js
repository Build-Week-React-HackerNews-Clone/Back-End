require('dotenv').config(); //load before using environment
const server = require("./api/server.js");
const defaults = require('./data/defaults.js');

const port = defaults.port;

server.listen(port, () => {
  console.log(`Server listening on Port: ${port}`);
});
