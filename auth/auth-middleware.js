const jwt = require("jsonwebtoken");

const secret = require('../data/secret.js')

module.exports = {
  authorization,
  jwtSecret
};

const jwtSecret = secret.JWT_SECRET;

function authorization(req, res, next) {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Please provide token" });
      } else {
        req.user = {
          username: decodedToken.username
        };
        next();
      }
    });
  } else {
    res.status(401).json({ you: "Not logged in" });
  }
}
