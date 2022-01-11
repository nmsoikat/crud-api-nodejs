const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  category: {
    type: String,
    required: [true, "Category can not be empty"],
  },
});

const CategoryModel = mongoose.model("category", categorySchema);

module.exports = CategoryModel;
