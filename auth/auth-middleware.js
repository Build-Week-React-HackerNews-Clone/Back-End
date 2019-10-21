const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;

module.exports = {
  authorization,
  jwtSecret
};

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
