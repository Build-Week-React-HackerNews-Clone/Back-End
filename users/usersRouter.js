const router = require("express").Router();

const usersModel = require("./usersModel.js");

router.get("/", (req, res) => {
  usersModel
    .find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});
module.exports = router;

// router.put('/:id', (req, res) => {
//     const id = req.params.id;
//     usersModel.findById(id)
// })