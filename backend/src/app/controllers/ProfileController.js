const db = require("../models");

class ProfileController {
  // [GET] /profile/:username
  profile(req, res, next) {
    const username = req.params.username;
    db.User.findOne({
      where: { username },
      raw: true,
    })
      .then((user) => {
        delete user.password
        res.send(user).status(200);
      })
      .catch(next);
  }
}

module.exports = new ProfileController();
