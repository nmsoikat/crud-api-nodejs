const express = require("express");
const {
  createCategory,
  readCategories,
  readCategoryById,
  updateCategory,
  deleteCategory
} = require("../controllers/categoryController");

const router = express.Router();

router.route("/").post(createCategory).get(readCategories);
router.route("/:id").get(readCategoryById).patch(updateCategory).delete(deleteCategory);

module.exports = router;
