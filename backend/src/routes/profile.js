const Router = require("express");
const router = Router();

const ProfileController = require("../app/controllers/ProfileController");

router.get('/:username', ProfileController.profile);
module.exports = router;