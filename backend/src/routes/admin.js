const Router = require("express");
const router = Router();

const AdminController = require("../app/controllers/AdminController");

router.get('/users', AdminController.getAllUser);
router.get('/products',AdminController.getAllProduct);
module.exports = router;