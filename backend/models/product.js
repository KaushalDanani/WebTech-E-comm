const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Product Name cannot be empty."],
  },
  brand: {
    type: String,
    required: [true, "Product Brand cannot be empty."],
  },
  images: [
    {
      img: String,
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
    required: [true, "Price cannot be empty."],
  },
  discount: {
    type: Number,
    default: 0,
  },
  averageStar: {
    type: Number,
    default: 0,
  },
  noOfOrder: {
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

// productSchema.methods.getProducts = function(){

// }
productSchema.statics.findByQuery = function (query) {
  return this.find({
    $or: [
      { name: { $regex: query, $options: "i" } }, // Search by name (case-insensitive)
      { brand: { $regex: query, $options: "i" } }, // Search by brand (case-insensitive)
      { description: { $regex: query, $options: "i" } }, // Search by description (case-insensitive)
      {
        category: {
          $regex: query, // Case-insensitive search for 'electronics' in category
          $options: "i",
        },
      },
    ],
  });
};

productSchema.statics.getProducts = function () {
  return this.find(
    {},
    {
      _id: 1,
      name: 1,
      brand: 1,
      images: 1,
      price: 1,
      averageStar: 1,
      discount:1,
      remarks:1,
      category:1
    }
  );
};

model("Product", productSchema);
