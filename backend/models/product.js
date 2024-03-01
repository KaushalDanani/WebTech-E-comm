const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: [true, "Product Name cannot be empty."],
  },
  productBrand: {
    type: String,
    required: [true, "Product Brand cannot be empty."],
  },
  images: [
    {
      img: Buffer,
      contentType: String,
    },
  ],
  description: {
    type: String,
    required: [true, "Description cannot be empty."],
  },
  category: [String],
  price: {
    type: Number,
    required: [true, "Description cannot be empty."],
  },
  averageStar: {
    type: Number,
    default: 0,
  },
  remarks: {
    colors: [
      {
        color: String,
      },
    ],
    sizes: [
      {
        size: String,
      },
    ],
  },
});

mongoose.model("Product",productSchema);
