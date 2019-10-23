const router = require("express").Router();
const articleModel = require("./article-model.js");
//import here the auth middleware for use with favorites

router.get("/"),
  (req, res) => {
    articleModel
      .find()
      .then(topArticles => {
        res.status(200).json(topArticles);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "Cannot retrieve articles from database", error });
      });
  };

module.exports = router;
