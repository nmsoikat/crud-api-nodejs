const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product must have a name"],
    minLength: [3, "Minimum 3 character is allowed"],
    maxLength: [100, "Maximum 100 character is allowed"],
    trim: true,
  },
  price: {
    type: [Number, "Price should be digit"],
    required: [true, "A product must have a price"],
  },
  qty: {
    type: [Number, "Quantity should be digit"],
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CategoryModel",
    required: true,
  }
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
