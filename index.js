require('dotenv').config(); //load before using environment
const server = require("./api/server.js");


const port = process.env.PORT || 6000;

server.listen(port, () => {
  console.log(`Server listening on Port: ${port}`);
});
