const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const secrets = require('../data/defaults.js');

const authenticate = require("../auth/auth-middleware.js");
const authRouter = require("../auth/auth-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
console.log("environment", secrets.environment);

server.use('/api/auth', authRouter);

server.get("/", (req, res) => {
  res.send("Server is running");
});

module.exports = server;