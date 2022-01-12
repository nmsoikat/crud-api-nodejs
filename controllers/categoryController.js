const CategoryModel = require("../models/CategoryModel");
const asyncHandler = require("express-async-handler");

//@desc   Create a new category
//@route  POST /api/v1/category
//@access public
exports.createCategory = asyncHandler(async (req, res) => {
  const { category } = req.body;

  const categoryInstance = await CategoryModel.create({ category });

  if (categoryInstance) {
    res.status(201).json(categoryInstance);
  } else {
    throw new Error("Category Add failed!");
  }
});

//@desc  Read all category
//@route GET /api/v1/category
//@access public
exports.readCategories = asyncHandler(async (req, res) => {
  const categories = await CategoryModel.find({});

  if (categories.length > 0) {
    res.status(200).json(categories);
  } else {
    throw new Error("Data not found");
  }
});

//@desc  Read category by id
//@route GET /api/v1/category/:id
//@access public
exports.readCategoryById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const category = await CategoryModel.findById(id);

  if (category) {
    res.status(200).json(category);
  } else {
    throw new Error("Data not found");
  }
});

//@desc  Update category by id
//@route PATCH /api/v1/category/:id
//@access public
exports.updateCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const category = req.body.category;

  const categoryData = await CategoryModel.findByIdAndUpdate(
    id,
    { category },
    { new: true, runValidators: true }
  );

  if (categoryData) {
    res.status(200).json(categoryData);
  } else {
    throw new Error("Update fail");
  }
});

//@desc  Delete category by id
//@route DELETE /api/v1/category/:id
//@access public
exports.deleteCategory = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const categoryData = await CategoryModel.findByIdAndDelete(id);

  if (categoryData) {
    res.status(200).json(categoryData);
  } else {
    throw new Error("Delete fail");
  }
});
