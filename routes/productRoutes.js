const router = require("express").Router();
const {
  createProduct,
  getAllProduct,
} = require("../controllers/productController");
const {
  uploadProductImage,
  uploadImageCloud,
} = require("../controllers/uploadsController");

router.route("/").post(createProduct).get(getAllProduct);
router.route("/uploads").post(uploadImageCloud);

module.exports = router;
