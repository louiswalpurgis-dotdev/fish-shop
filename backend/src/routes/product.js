const Router = require("express");
const router = Router();

const ProductController = require("../app/controllers/ProductController");
const { upload } = require("../service/upload.service");

router.get('/:slug', ProductController.getOne);
router.get('/:id/get', ProductController.getId);
router.post('/create',upload.single("image"),ProductController.createProduct);
router.put("/:id/update",upload.single("image"), ProductController.updateProduct);
router.delete("/:id/delete", ProductController.deleteProduct);
module.exports = router;