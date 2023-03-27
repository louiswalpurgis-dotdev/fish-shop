const db = require("../models");
class HomeController {
    // [GET] /
    index(req, res, next) {
        db.Product.findAll({raw: true})
        .then(products => res.status(200).send(products))
        .catch(next);
    }
}

module.exports = new HomeController();