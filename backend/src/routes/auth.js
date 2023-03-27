const Router = require("express");
const router = Router();

const AuthController = require("../app/controllers/AuthController");
const authGuard = require('../middleware/auth.guard');
const schema = require('../validation/auth.validation');
const validate = require('../utils/validator');

router.post('/register', validate(schema.register), AuthController.resgister);
router.post('/login', validate(schema.login), AuthController.login);
router.get('/logout', authGuard, AuthController.logout);
module.exports = router;