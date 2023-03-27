const Router = require("express");
const router = Router();

const AccountController = require("../app/controllers/AccountController");
const { upload } = require("../service/upload.service");

router.put(
  "/:username/update",
  upload.single("image"),
  AccountController.update
);
router.delete("/:id/delete", AccountController.delete);
module.exports = router;
