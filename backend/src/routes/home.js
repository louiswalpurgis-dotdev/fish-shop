const Router = require("express");
const router = Router();

const HomeController = require("../app/controllers/HomeController");

router.get('/', HomeController.index);
module.exports = router;