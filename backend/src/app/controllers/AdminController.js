const db = require("../models");

class AdminController {
  // [GET] /admin/users
  getAllUser(req, res, next) {
    db.User.findAll({
      raw: true,
    })
      .then((users) => {
        res.send(users);
      })
      .catch(next);
  }

  // [GET] /admin/products
  getAllProduct(req, res, next) {
    db.Product.findAll({
      raw: true,
    })
      .then((products) => res.send(products).status(200))
      .catch((err) => console.log(err));
  }
}

module.exports = new AdminController();
