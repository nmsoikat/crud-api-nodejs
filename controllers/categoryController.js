const CategoryModel = require("../models/CategoryModel");

//@desc   Create a new category
//@route  POST /api/v1/category
//@access public
exports.createCategory = async (req, res) => {
  try {
    const { category } = req.body;

    const categoryInstance = await CategoryModel.create({ category });

    res.status(201).json(categoryInstance);
  } catch (err) {
    console.log(err.message);
  }
};

//@desc  Read all category
//@route GET /api/v1/category
//@access public
exports.readCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find({});
    if (categories) {
      res.status(200).json(categories);
    } else {
      console.log("no data");
    }
  } catch (err) {
    console.log(err.message);
  }
};

//@desc  Read category by id
//@route GET /api/v1/category/:id
//@access public
exports.readCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await CategoryModel.findById(id);

    if (category) {
      res.status(200).json(category);
    } else {
      console.log("no data");
    }
  } catch (err) {
    console.log(err.message);
  }
};

//@desc  Update category by id
//@route PATCH /api/v1/category/:id
//@access public
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { category } = req.body;

    const categoryData = await CategoryModel.findByIdAndUpdate(
      id,
      { category },
      { new: true, runValidators: true }
    );

    if (categoryData) {
      res.status(200).json(categoryData);
    } else {
      console.log("updated fail");
    }
  } catch (err) {
    console.log(err.message);
  }
};

//@desc  Delete category by id
//@route DELETE /api/v1/category/:id
//@access public
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const categoryData = await CategoryModel.findByIdAndDelete(id);

    if (categoryData) {
      res.status(200).json(categoryData);
    } else {
      console.log("deleted fail");
    }
  } catch (err) {
    console.log(err.message);
  }
};
