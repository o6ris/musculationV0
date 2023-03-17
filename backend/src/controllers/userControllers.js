const models = require("../models");

const validateUser = (req, res) => {
  models.user
    .findOne(req.body)
    .then(([user]) => {
      if (user[0]) {
        res.send(user[0]).status(201);
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  validateUser,
};
