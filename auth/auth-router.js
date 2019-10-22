const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { jwtSecret } = require("../auth/auth-middleware");

const usersModel = require("../users/usersModel.js");

router.post("/register", checkUser, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 14);
  user.password = hash;

  usersModel
    .add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      if (error.errno === 19) {
        res
          .status(500)
          .json({ message: "Username and/or email in use.", error });
      }
      res
        .status(500)
        .json({ message: "Cannot add the user at this time", error });
      console.log(error);
    });
});

router.post("/login", checkUser, (req, res) => {
  let { username, password } = req.body;

  usersModel
    .findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `${user.username} is signed in`,
          token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Server error, check login function on routes.js",
        error: `${error}`
      });
    });
});

function generateToken(user) {
  const payload = {
    username: user.username,
    subject: user.id
  };
  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, jwtSecret, options);
}

function checkUser(req, res, next) {
  const userBody = req.body;

  if (!userBody.username || !userBody.password) {
    res.status(401).json({ message: "Please provide username & password!" });
  } else {
    next();
  }
}
module.exports = router;
